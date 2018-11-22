CREATE DATABASE  IF NOT EXISTS `basenews` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `basenews`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: basenews
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article` (
  `id_article` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(40) NOT NULL,
  `auteurArticle` varchar(20) NOT NULL,
  `tag` varchar(30) NOT NULL,
  `datePublication` datetime DEFAULT NULL,
  `etat` varchar(20) DEFAULT NULL,
  `nbVue` int(11) DEFAULT NULL,
  `contenuArticle` text NOT NULL,
  PRIMARY KEY (`id_article`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'premier article','bob','sport','2018-11-22 11:02:00','valide',2,'mon premierth'),(2,'second article','bob','voyage','2018-11-16 09:00:00','valide',10,'article sur le voyage'),(7,'test titre','bob','insolite','2018-11-19 14:33:47','valide',0,'paf le chien'),(10,'nouveau smartphone','dalton','high-tech','2018-11-22 09:27:49','valide',0,'grand écran et meilleur autonomie'),(11,'nouveau titre2','dalton','sport','2018-11-20 08:17:53','valide',0,'le foot28'),(14,'la pluie','dalton','voyage','2018-11-20 12:47:28','valide',0,'pas de voyage'),(20,'c\'est mercredi','dalton','insolite','2018-11-21 15:37:52','valide',0,'Ah'),(21,'je sais pas','bob','insolite','2018-11-22 11:01:53','valide',0,'???'),(23,'test titrezxazd','bob','insolite','2018-11-22 11:14:37','valide',0,'zedxzedf');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_commentaires`
--

DROP TABLE IF EXISTS `article_commentaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_commentaires` (
  `Article_id_article` int(11) NOT NULL,
  `commentaires_idCommentaire` int(11) NOT NULL,
  UNIQUE KEY `UK_3na8nw9qbvedii571oenpua2r` (`commentaires_idCommentaire`),
  KEY `FK4fnwg6bswjt74ubcgef3119l3` (`Article_id_article`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_commentaires`
--

LOCK TABLES `article_commentaires` WRITE;
/*!40000 ALTER TABLE `article_commentaires` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_commentaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `commentaire` (
  `idCommentaire` int(11) NOT NULL AUTO_INCREMENT,
  `auteurCommentaire` varchar(255) DEFAULT NULL,
  `contenuCommentaire` longtext,
  `dateCommentaire` datetime DEFAULT NULL,
  `etatCommentaire` varchar(255) DEFAULT NULL,
  `idArticle` int(11) DEFAULT NULL,
  `idPersonne` int(11) DEFAULT NULL,
  `personne` tinyblob,
  `article` tinyblob,
  PRIMARY KEY (`idCommentaire`),
  KEY `FKm3u1s21u7jvfp2le53uta5nak` (`idPersonne`),
  KEY `FK11pd93hwbhup0u7vfnpyv960s` (`idArticle`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaire`
--

LOCK TABLES `commentaire` WRITE;
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
INSERT INTO `commentaire` VALUES (1,'mmmmm','1er comm','2018-02-28 12:00:00','valide',NULL,3,NULL,NULL),(7,'dalton','zelfkjzle','2018-04-28 12:00:00','valide',11,NULL,NULL,NULL),(9,'dalton','uoiu','2018-11-20 13:34:33','valide',14,NULL,NULL,NULL),(10,'dalton','commentaire en plus','2018-11-20 13:42:48','valide',14,NULL,NULL,NULL),(17,'bob','c\'est moi! bob, qui ai écrit cet article.','2018-11-21 14:50:31','valide',NULL,NULL,NULL,NULL),(18,'dalton','uoiuoj','2018-11-22 09:13:29','valide',20,NULL,NULL,NULL),(19,'bob','aaaaaa','2018-11-22 09:14:07','valide',20,NULL,NULL,NULL),(23,'travolta','non?hfth','2018-11-22 09:41:20','valide',10,NULL,NULL,NULL),(24,'wayne','!!','2018-11-22 09:43:32','valide',10,NULL,NULL,NULL),(27,'travolta','tyjdtyjdrty','2018-11-22 11:01:17','valide',20,NULL,NULL,NULL),(30,'travolta','rthehg','2018-11-22 11:12:23','valide',10,NULL,NULL,NULL),(29,'wick','fjlzekfsdf','2018-11-22 11:02:42','valide',21,NULL,NULL,NULL);
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne`
--

DROP TABLE IF EXISTS `personne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `personne` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `mdp` varchar(40) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'utilisateur',
  `abonne` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne`
--

LOCK TABLES `personne` WRITE;
/*!40000 ALTER TABLE `personne` DISABLE KEYS */;
INSERT INTO `personne` VALUES (1,'wick','john','admin@gmail.com','admin','administrateur',0),(2,'bob','joe','joe.bob@gmail.com','mdpbob','journaliste',0),(3,'mmp','mmooo','mail.test@hotmail.com','mdptest','utilisateur',0),(4,'travolta','john','john.travolta@gmail.com','mdptravolta','utilisateur',0),(23,'wayne','bruce','bruce.wayne@gmail.com','batman','utilisateur',0),(25,'nom1','prenom1','nom.prenom@gmail.com','36a32e96cbfd11fd98e8c98e38d9ad9b41f57f1a','utilisateur',0),(26,'wayne','alfred','alfred.wayne@gmail.com','3eb8718a2e774f8066bfc0ab7c4cf59df3f8f933','journaliste',0),(28,'dalton','jack','jack@mail.com','testpass','journaliste',0),(82,'qsd','ddqssd','qsd@gmail.com','qsdqsd','utilisateur',1);
/*!40000 ALTER TABLE `personne` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne_commentaires`
--

DROP TABLE IF EXISTS `personne_commentaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `personne_commentaires` (
  `Personne_id` int(11) NOT NULL,
  `commentaires_idCommentaire` int(11) NOT NULL,
  UNIQUE KEY `UK_6kt107ij0atn43w76fq14804j` (`commentaires_idCommentaire`),
  KEY `FKlaya9ely1lsylf5kskqgp5wsq` (`Personne_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne_commentaires`
--

LOCK TABLES `personne_commentaires` WRITE;
/*!40000 ALTER TABLE `personne_commentaires` DISABLE KEYS */;
/*!40000 ALTER TABLE `personne_commentaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne_roles`
--

DROP TABLE IF EXISTS `personne_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `personne_roles` (
  `Personne_id` int(11) NOT NULL,
  `roles_id` bigint(20) NOT NULL,
  KEY `FK8hpstg57jxlchwx9ke7r3daee` (`roles_id`),
  KEY `FK1cv4obmf40garv9rd4v4cqd16` (`Personne_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne_roles`
--

LOCK TABLES `personne_roles` WRITE;
/*!40000 ALTER TABLE `personne_roles` DISABLE KEYS */;
INSERT INTO `personne_roles` VALUES (1,1),(2,2),(4,3),(28,2),(23,3);
/*!40000 ALTER TABLE `personne_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redaction`
--

DROP TABLE IF EXISTS `redaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `redaction` (
  `id_redac_association` int(11) NOT NULL AUTO_INCREMENT,
  `date_modif` datetime DEFAULT NULL,
  `article_id` int(11) DEFAULT NULL,
  `personne_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_redac_association`),
  KEY `FK8dt26ntkfun86nxmd6fbc21va` (`article_id`),
  KEY `FKb4e1mpwillk5493cjbt3j1j4b` (`personne_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redaction`
--

LOCK TABLES `redaction` WRITE;
/*!40000 ALTER TABLE `redaction` DISABLE KEYS */;
INSERT INTO `redaction` VALUES (1,'2018-02-28 12:00:00',1,2),(2,'2018-11-16 09:00:00',2,2);
/*!40000 ALTER TABLE `redaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_JOURNALISTE'),(3,'ROLE_UTILISATEUR');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-22 12:18:12
