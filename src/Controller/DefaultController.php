<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{



    #[Route('/kuba', name: 'page_kuba_test')]
    public function testPage(Request $request) {

        return $this->render('base.html.twig');
    }

}