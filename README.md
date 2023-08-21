# SpringImpot
#GestImp est la partie backend(api)
-On a comme entités declarant, declaration et paiement
En les creant j'ai fait attention à ajouter @entity ... pour les entités
@RestController ,@RequestMapping("/api"), @CrossOrigin(origins = "*") pour les controllers et @Repository pour les dao 

la configuration de l'api dans application.yaml: jai choisi ce dernier à application.properties car c'etait plus facile pour declarer le port du serveur.
si le projet etait d'une plus grannde envergure une entité pour la journalisation des erreurs et aussi l'ecriture des tests auraient étés mieux mais comme j'ai ajouté un frontend directement pour tester.
