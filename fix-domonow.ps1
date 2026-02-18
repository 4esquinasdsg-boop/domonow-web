# Script to wrap DomoNow with gradient span in all TSX files
# Only wraps visible text DomoNow, skips alt attributes and already-wrapped instances

$solutionsDir = Join-Path (Get-Location) "components\solutions"
$componentsDir = Join-Path (Get-Location) "components"

# Get all TSX files
$files = Get-ChildItem -Path $componentsDir -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Skip if no DomoNow found
    if ($content -notmatch "DomoNow") { continue }
    
    # Replace DomoNow that is NOT inside:
    # - alt="..." attributes
    # - className="..." attributes  
    # - already wrapped in domonow-gradient span
    # - inside HTML tag attributes
    
    # Strategy: Replace plain text DomoNow (not inside quotes that are attribute values)
    # We'll replace >DomoNow< patterns and text DomoNow that appears in JSX text content
    
    # 1. Already wrapped - skip these (mark them temporarily)
    $content = $content -replace 'class="domonow-gradient">DomoNow<', 'class="domonow-gradient">DOMONOW_WRAPPED<'
    $content = $content -replace 'className="domonow-gradient">DomoNow<', 'className="domonow-gradient">DOMONOW_WRAPPED<'
    
    # 2. Skip alt attributes (mark them temporarily)
    $content = $content -replace 'alt="([^"]*?)DomoNow([^"]*?)"', 'alt="${1}DOMONOW_ALT${2}"'
    
    # 3. Skip title tag in index.html
    $content = $content -replace '<title>([^<]*?)DomoNow([^<]*?)</title>', '<title>${1}DOMONOW_TITLE${2}</title>'

    # 4. Now replace all remaining DomoNow with gradient span
    $content = $content -replace 'DomoNow', '<span className="domonow-gradient">DomoNow</span>'
    
    # 5. Restore protected instances
    $content = $content -replace 'DOMONOW_WRAPPED', 'DomoNow'
    $content = $content -replace 'DOMONOW_ALT', 'DomoNow'
    $content = $content -replace 'DOMONOW_TITLE', 'DomoNow'
    
    if ($content -ne $original) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Done!"
