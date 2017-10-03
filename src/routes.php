<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Appel de la route racine ");

    // Render index view
    return $response->withJson("Merci de voir la documentation de l api meteo",200);
});

$app->get('/prevision[/{city}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Appel de la route prévision pour la ville ".$args['city']);

    if(!$args['city']){
       //throw new Exception("Vous devez spécifier une ville");
        return $response->withJson("Vous devez spécifier une ville",403);
    }
    $client = new GuzzleHttp\Client();
    $res = $client->request('GET', 'api.openweathermap.org/data/2.5/weather?q='.$args['city'].'&appid=e6221bb27e53441f7f7582f9be12ea9a');

    return $response->write($res->getBody()->getContents(),200);
});
