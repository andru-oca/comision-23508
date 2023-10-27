-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: libreria_23508
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AUTOR`
--

DROP TABLE IF EXISTS `AUTOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AUTOR` (
  `CODIGO_AUTOR` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(50) DEFAULT 'NOMBRE DESCONOCIDO',
  PRIMARY KEY (`CODIGO_AUTOR`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTOR`
--

LOCK TABLES `AUTOR` WRITE;
/*!40000 ALTER TABLE `AUTOR` DISABLE KEYS */;
INSERT INTO `AUTOR` VALUES (1,'ISMAEL'),(2,'MANAL'),(3,'SANDRA'),(4,'ESTEBAN'),(5,'NOMBRES NULL'),(6,'Serena'),(7,'Russ'),(8,'Kristin'),(9,'Flory'),(10,'Blondell'),(11,'NOMBRES NULL'),(12,'NOMBRES NULL'),(13,'NOMBRES NULL'),(14,'NOMBRES NULL'),(15,'Patricio'),(16,'Yasmin'),(17,'NOMBRES NULL'),(18,'NOMBRES NULL'),(19,'NOMBRES NULL'),(20,'NOMBRES NULL'),(21,'NOMBRES NULL'),(22,'Felicdad'),(23,'Tabb'),(24,'NOMBRES NULL'),(25,'Dinah'),(26,'NOMBRES NULL'),(27,'Josi'),(28,'Oliviero'),(29,'NOMBRES NULL'),(30,'NOMBRES NULL'),(31,'Flem'),(32,'Celestyna'),(33,'NOMBRES NULL'),(34,'Zara'),(35,'NOMBRES NULL'),(36,'Francisco'),(37,'NOMBRES NULL'),(38,'Clarance'),(39,'Gerhardine'),(40,'Gwyn'),(41,'Ellen'),(42,'Gayle'),(43,'Drusy'),(44,'Brigitta'),(45,'NOMBRES NULL'),(46,'NOMBRES NULL'),(47,'NOMBRES NULL'),(48,'Marie-ann'),(49,'Zaccaria'),(50,'Jarib'),(51,'Sibelle'),(52,'Albina'),(53,'NOMBRES NULL'),(54,'Dougy'),(200,'NOMBRE DESCONOCIDO');
/*!40000 ALTER TABLE `AUTOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EJEMPLAR`
--

DROP TABLE IF EXISTS `EJEMPLAR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EJEMPLAR` (
  `CODIGO_EJEMPLAR` int NOT NULL AUTO_INCREMENT,
  `CODIGO_LIBRO` int NOT NULL,
  `ALMACEN` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CODIGO_EJEMPLAR`),
  KEY `CODIGO_LIBRO` (`CODIGO_LIBRO`),
  CONSTRAINT `EJEMPLAR_ibfk_1` FOREIGN KEY (`CODIGO_LIBRO`) REFERENCES `LIBRO` (`CODIGO_LIBRO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EJEMPLAR`
--

LOCK TABLES `EJEMPLAR` WRITE;
/*!40000 ALTER TABLE `EJEMPLAR` DISABLE KEYS */;
/*!40000 ALTER TABLE `EJEMPLAR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LIBRO`
--

DROP TABLE IF EXISTS `LIBRO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LIBRO` (
  `CODIGO_LIBRO` int NOT NULL AUTO_INCREMENT,
  `ISBN` varchar(100) DEFAULT '987-ISB-NI-IDEA',
  `EDITORIAL` varchar(100) DEFAULT 'EDITORIAL NULL',
  `PAGINA` int DEFAULT '100',
  `TITULO` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT 'NO TITLE',
  PRIMARY KEY (`CODIGO_LIBRO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIBRO`
--

LOCK TABLES `LIBRO` WRITE;
/*!40000 ALTER TABLE `LIBRO` DISABLE KEYS */;
/*!40000 ALTER TABLE `LIBRO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LINK_AUTOR_LIBRO`
--

DROP TABLE IF EXISTS `LINK_AUTOR_LIBRO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LINK_AUTOR_LIBRO` (
  `CODIGO_AUTOR` int NOT NULL,
  `CODIGO_LIBRO` int NOT NULL,
  `LUGAR_ESCRITURA` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CODIGO_AUTOR`,`CODIGO_LIBRO`),
  KEY `CODIGO_LIBRO` (`CODIGO_LIBRO`),
  CONSTRAINT `LINK_AUTOR_LIBRO_ibfk_1` FOREIGN KEY (`CODIGO_AUTOR`) REFERENCES `AUTOR` (`CODIGO_AUTOR`),
  CONSTRAINT `LINK_AUTOR_LIBRO_ibfk_2` FOREIGN KEY (`CODIGO_LIBRO`) REFERENCES `LIBRO` (`CODIGO_LIBRO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LINK_AUTOR_LIBRO`
--

LOCK TABLES `LINK_AUTOR_LIBRO` WRITE;
/*!40000 ALTER TABLE `LINK_AUTOR_LIBRO` DISABLE KEYS */;
/*!40000 ALTER TABLE `LINK_AUTOR_LIBRO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIO`
--

DROP TABLE IF EXISTS `USUARIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USUARIO` (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `TEL` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIO`
--

LOCK TABLES `USUARIO` WRITE;
/*!40000 ALTER TABLE `USUARIO` DISABLE KEYS */;
/*!40000 ALTER TABLE `USUARIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VENTA`
--

DROP TABLE IF EXISTS `VENTA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VENTA` (
  `ID_VENTA` int NOT NULL AUTO_INCREMENT,
  `CODIGO_EJEMPLAR` int NOT NULL,
  `ID_USUARIO` int NOT NULL,
  `PUNTO_VENTA` varchar(100) DEFAULT NULL,
  `PRECIO_VENTA` decimal(10,2) DEFAULT NULL,
  `FECHA_VENTA` date DEFAULT NULL,
  PRIMARY KEY (`ID_VENTA`),
  KEY `CODIGO_EJEMPLAR` (`CODIGO_EJEMPLAR`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `VENTA_ibfk_1` FOREIGN KEY (`CODIGO_EJEMPLAR`) REFERENCES `EJEMPLAR` (`CODIGO_EJEMPLAR`),
  CONSTRAINT `VENTA_ibfk_2` FOREIGN KEY (`ID_USUARIO`) REFERENCES `USUARIO` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VENTA`
--

LOCK TABLES `VENTA` WRITE;
/*!40000 ALTER TABLE `VENTA` DISABLE KEYS */;
/*!40000 ALTER TABLE `VENTA` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-27 12:28:03
