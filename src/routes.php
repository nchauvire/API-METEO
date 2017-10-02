<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Appel de la route racine ");


    // Render index view
    return $response->withJson("Merci de voir la documentation de l'api méteo",200);
});

$app->get('/prevision[/:city]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Appel de la route prévision pour la ville ".$args['city']);

    $client = new GuzzleHttp\Client();
    $res = $client->request('GET', 'http://www.prevision-meteo.ch/services/json/lat=47.218371ng=-1.553621');

    var_dump($res);
    // Render index view
    return $response->withJson("",200);
});
