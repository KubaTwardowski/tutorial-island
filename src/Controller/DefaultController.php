<?php

namespace App\Controller;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/LuckyNumber', name: 'lucky_number')]
    public function number(): Response
    {
        // Generate a random number between 1 and 100 as an example
        $number = rand(1, 100);

        return $this->render('number.html.twig', [
            'luckyNumber' => $number,
        ]);
    }

    #[Route('/number/generator/api', name: 'lucky_number_api')]
    public function numberNew()
    {
        // Generate a random number between 1 and 100 as an example
        $number = rand(1, 10);

        return $this->json(
            $number
        );
    }
    #[Route('/Controversial', name: 'controversial')]
    public function contro()
    {
        return $this->render('Controversial_topics.html.twig');
    }
    #[Route('/tinder', name: 'page_kubas')]
    public function tinder2()
    {
        return $this->render('Description.html.twig');

    }

    #[Route('/hobbies', name: 'matts_hobbies')]
    public function hobbies()
    {
        return $this->render('mattsHobbies.html.twig');
    }


    #[Route('/', name: 'page_kuba_test')]
    public function testPage(Request $request, EntityManagerInterface $entityManager)
    {

        // Create Object
        $message = new Message();
        $message->setMessageData("Swipe right please!");

        // Save Object to DB
        $entityManager->persist($message);
        $entityManager->flush();


        // Get All the "Messages"
        $message = $entityManager->getRepository(Message::class)->findAll();

        // Render the First Page with all the "Messages"
        return $this->render('default.html.twig', array(
            'messages' => $message
        ));
    }

    #[Route('/kuba2/{id}', name: 'page_kuba_test2')]
    public function testPage2(Request $request, EntityManagerInterface $entityManager, $id)
    {
        $message = $entityManager->getRepository(Message::class)->find($id);
        return $this->render('controversialTopics.html.twig', array("message" => $message));
    }


    private function helperFucntion()
    {

    }

}