-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  lun. 21 juin 2021 à 12:32
-- Version du serveur :  5.7.28
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mydb`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `category` text NOT NULL,
  `quantity` int(45) NOT NULL,
  `unit_price` float(99,2) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `name`, `category`, `quantity`, `unit_price`, `description`) VALUES
(60, 'Tee-shirt', 'enfant', 4, 4.00, 'Tee-shirt éco-conçu col tunisien'),
(64, 'Robe', 'femme', 3, 10.00, 'Robe en jersey emmanchures américaines'),
(59, 'Pantalon', 'femme', 5, 15.00, 'Pantalon fluide'),
(65, 'Chaussettes', 'enfant', 75, 8.00, 'Lot de 5 paires de chaussettes \'Spider-Man\''),
(66, 'Tee-shirt', 'homme', 5, 6.00, 'Tee-shirt en maille jersey pur coton'),
(68, 'Jean', 'homme', 86, 25.00, 'Jean regular éco-conçu');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
