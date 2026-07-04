param(
    [Parameter(Mandatory = $true)]
    [string]$WebhookUrl,

    [Parameter(Mandatory = $false)]
    [string]$WebhookToken = "",

    [Parameter(Mandatory = $false)]
    [string]$PayloadPath = ".\\test-payload.json"
)

$resolvedPayload = Resolve-Path -LiteralPath $PayloadPath -ErrorAction Stop
$body = Get-Content -LiteralPath $resolvedPayload -Raw -Encoding utf8

$headers = @{
    "Content-Type" = "application/json"
}

if ($WebhookToken -ne "") {
    $headers["X-Webhook-Token"] = $WebhookToken
}

Invoke-RestMethod `
    -Method Post `
    -Uri $WebhookUrl `
    -Headers $headers `
    -Body $body
