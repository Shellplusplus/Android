<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache, no-store, must-revalidate');

$json = file_get_contents(__DIR__ . '/update.json');
if ($json === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to read update.json']);
    exit;
}
echo $json;
