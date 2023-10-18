-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 15, 2023 at 02:59 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evaluation`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `departments_id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `departments_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`departments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`departments_id`, `departments_name`) VALUES
('ACC', 'Accountacy'),
('CIT', 'Computing & Information Technology'),
('ENE', 'Engineering'),
('TED', 'Technical Education');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
CREATE TABLE IF NOT EXISTS `grades` (
  `grades_id` int NOT NULL AUTO_INCREMENT,
  `students_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modules_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `grade` int NOT NULL,
  `grade_category` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci GENERATED ALWAYS AS ((case when (`grade` >= 75) then _utf8mb4'Distinction' when ((`grade` >= 60) and (`grade` <= 74)) then _utf8mb4'Credit' when ((`grade` >= 50) and (`grade` <= 59)) then _utf8mb4'Pass' else _utf8mb4'Fail' end)) STORED,
  PRIMARY KEY (`grades_id`),
  KEY `students_id` (`students_id`),
  KEY `modules_id` (`modules_id`)
) ENGINE=InnoDB AUTO_INCREMENT=514 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`grades_id`, `students_id`, `modules_id`, `grade`) VALUES
(1, 'BIS-17-SS-030', 'OPS-322', 54),
(2, 'BIS-17-SS-030', 'PRG-326', 55),
(3, 'BIS-17-SS-030', 'HWS-323', 11),
(4, 'BIS-17-SS-030', 'DMS-311', 93),
(5, 'BIS-17-SS-030', 'SYS-321', 29),
(6, 'BIS-17-SS-030', 'RES-321', 68),
(7, 'BIS-18-SS-036', 'OPS-322', 49),
(8, 'BIS-18-SS-036', 'PRG-326', 45),
(9, 'BIS-18-SS-036', 'HWS-323', 78),
(10, 'BIS-18-SS-036', 'DMS-311', 51),
(11, 'BIS-18-SS-036', 'SYS-321', 24),
(12, 'BIS-18-SS-036', 'RES-321', 67),
(13, 'BIS-19-SS-002', 'OPS-322', 62),
(14, 'BIS-19-SS-002', 'PRG-326', 7),
(15, 'BIS-19-SS-002', 'HWS-323', 53),
(16, 'BIS-19-SS-002', 'DMS-311', 40),
(17, 'BIS-19-SS-002', 'SYS-321', 43),
(18, 'BIS-19-SS-002', 'RES-321', 96),
(19, 'BIS-19-SS-013', 'OPS-322', 50),
(20, 'BIS-19-SS-013', 'PRG-326', 61),
(21, 'BIS-19-SS-013', 'HWS-323', 54),
(22, 'BIS-19-SS-013', 'DMS-311', 88),
(23, 'BIS-19-SS-013', 'SYS-321', 77),
(24, 'BIS-19-SS-013', 'RES-321', 22),
(25, 'BIS-19-SS-014', 'OPS-322', 81),
(26, 'BIS-19-SS-014', 'PRG-326', 38),
(27, 'BIS-19-SS-014', 'HWS-323', 48),
(28, 'BIS-19-SS-014', 'DMS-311', 24),
(29, 'BIS-19-SS-014', 'SYS-321', 77),
(30, 'BIS-19-SS-014', 'RES-321', 12),
(31, 'BIS-19-SS-027', 'OPS-322', 31),
(32, 'BIS-19-SS-027', 'PRG-326', 20),
(33, 'BIS-19-SS-027', 'HWS-323', 7),
(34, 'BIS-19-SS-027', 'DMS-311', 76),
(35, 'BIS-19-SS-027', 'SYS-321', 56),
(36, 'BIS-19-SS-027', 'RES-321', 54),
(37, 'BIS-20-EP-031', 'OPS-322', 100),
(38, 'BIS-20-EP-031', 'PRG-326', 35),
(39, 'BIS-20-EP-031', 'HWS-323', 79),
(40, 'BIS-20-EP-031', 'DMS-311', 88),
(41, 'BIS-20-EP-031', 'SYS-321', 2),
(42, 'BIS-20-EP-031', 'RES-321', 51),
(43, 'BIS-20-SS-002', 'OPS-322', 47),
(44, 'BIS-20-SS-002', 'PRG-326', 83),
(45, 'BIS-20-SS-002', 'HWS-323', 72),
(46, 'BIS-20-SS-002', 'DMS-311', 10),
(47, 'BIS-20-SS-002', 'SYS-321', 37),
(48, 'BIS-20-SS-002', 'RES-321', 54),
(49, 'BIS-20-SS-003', 'OPS-322', 57),
(50, 'BIS-20-SS-003', 'PRG-326', 25),
(51, 'BIS-20-SS-003', 'HWS-323', 53),
(52, 'BIS-20-SS-003', 'DMS-311', 93),
(53, 'BIS-20-SS-003', 'SYS-321', 0),
(54, 'BIS-20-SS-003', 'RES-321', 27),
(55, 'BIS-20-SS-004', 'OPS-322', 36),
(56, 'BIS-20-SS-004', 'PRG-326', 96),
(57, 'BIS-20-SS-004', 'HWS-323', 71),
(58, 'BIS-20-SS-004', 'DMS-311', 69),
(59, 'BIS-20-SS-004', 'SYS-321', 30),
(60, 'BIS-20-SS-004', 'RES-321', 46),
(61, 'BIS-20-SS-005', 'OPS-322', 38),
(62, 'BIS-20-SS-005', 'PRG-326', 52),
(63, 'BIS-20-SS-005', 'HWS-323', 45),
(64, 'BIS-20-SS-005', 'DMS-311', 71),
(65, 'BIS-20-SS-005', 'SYS-321', 20),
(66, 'BIS-20-SS-005', 'RES-321', 86),
(67, 'BIS-20-SS-006', 'OPS-322', 71),
(68, 'BIS-20-SS-006', 'PRG-326', 95),
(69, 'BIS-20-SS-006', 'HWS-323', 61),
(70, 'BIS-20-SS-006', 'DMS-311', 19),
(71, 'BIS-20-SS-006', 'SYS-321', 13),
(72, 'BIS-20-SS-006', 'RES-321', 10),
(73, 'BIS-20-SS-007', 'OPS-322', 13),
(74, 'BIS-20-SS-007', 'PRG-326', 36),
(75, 'BIS-20-SS-007', 'HWS-323', 38),
(76, 'BIS-20-SS-007', 'DMS-311', 81),
(77, 'BIS-20-SS-007', 'SYS-321', 93),
(78, 'BIS-20-SS-007', 'RES-321', 20),
(79, 'BIS-20-SS-014', 'OPS-322', 23),
(80, 'BIS-20-SS-014', 'PRG-326', 54),
(81, 'BIS-20-SS-014', 'HWS-323', 2),
(82, 'BIS-20-SS-014', 'DMS-311', 48),
(83, 'BIS-20-SS-014', 'SYS-321', 35),
(84, 'BIS-20-SS-014', 'RES-321', 32),
(85, 'BIS-20-SS-015', 'OPS-322', 53),
(86, 'BIS-20-SS-015', 'PRG-326', 72),
(87, 'BIS-20-SS-015', 'HWS-323', 97),
(88, 'BIS-20-SS-015', 'DMS-311', 69),
(89, 'BIS-20-SS-015', 'SYS-321', 54),
(90, 'BIS-20-SS-015', 'RES-321', 62),
(91, 'BIS-20-SS-017', 'OPS-322', 48),
(92, 'BIS-20-SS-017', 'PRG-326', 56),
(93, 'BIS-20-SS-017', 'HWS-323', 36),
(94, 'BIS-20-SS-017', 'DMS-311', 12),
(95, 'BIS-20-SS-017', 'SYS-321', 52),
(96, 'BIS-20-SS-017', 'RES-321', 25),
(97, 'BIS-20-SS-019', 'OPS-322', 71),
(98, 'BIS-20-SS-019', 'PRG-326', 77),
(99, 'BIS-20-SS-019', 'HWS-323', 71),
(100, 'BIS-20-SS-019', 'DMS-311', 24),
(101, 'BIS-20-SS-019', 'SYS-321', 8),
(102, 'BIS-20-SS-019', 'RES-321', 71),
(103, 'BIS-20-SS-020', 'OPS-322', 29),
(104, 'BIS-20-SS-020', 'PRG-326', 32),
(105, 'BIS-20-SS-020', 'HWS-323', 73),
(106, 'BIS-20-SS-020', 'DMS-311', 70),
(107, 'BIS-20-SS-020', 'SYS-321', 30),
(108, 'BIS-20-SS-020', 'RES-321', 42),
(109, 'BIS-20-SS-022', 'OPS-322', 19),
(110, 'BIS-20-SS-022', 'PRG-326', 72),
(111, 'BIS-20-SS-022', 'HWS-323', 100),
(112, 'BIS-20-SS-022', 'DMS-311', 81),
(113, 'BIS-20-SS-022', 'SYS-321', 6),
(114, 'BIS-20-SS-022', 'RES-321', 88),
(115, 'BIS-20-SS-024', 'OPS-322', 22),
(116, 'BIS-20-SS-024', 'PRG-326', 47),
(117, 'BIS-20-SS-024', 'HWS-323', 70),
(118, 'BIS-20-SS-024', 'DMS-311', 6),
(119, 'BIS-20-SS-024', 'SYS-321', 22),
(120, 'BIS-20-SS-024', 'RES-321', 95),
(121, 'BIS-20-SS-026', 'OPS-322', 4),
(122, 'BIS-20-SS-026', 'PRG-326', 38),
(123, 'BIS-20-SS-026', 'HWS-323', 77),
(124, 'BIS-20-SS-026', 'DMS-311', 69),
(125, 'BIS-20-SS-026', 'SYS-321', 15),
(126, 'BIS-20-SS-026', 'RES-321', 71),
(127, 'BIS-20-SS-027', 'OPS-322', 7),
(128, 'BIS-20-SS-027', 'PRG-326', 23),
(129, 'BIS-20-SS-027', 'HWS-323', 98),
(130, 'BIS-20-SS-027', 'DMS-311', 14),
(131, 'BIS-20-SS-027', 'SYS-321', 80),
(132, 'BIS-20-SS-027', 'RES-321', 57),
(133, 'BIS-20-SS-030', 'OPS-322', 43),
(134, 'BIS-20-SS-030', 'PRG-326', 45),
(135, 'BIS-20-SS-030', 'HWS-323', 97),
(136, 'BIS-20-SS-030', 'DMS-311', 49),
(137, 'BIS-20-SS-030', 'SYS-321', 54),
(138, 'BIS-20-SS-030', 'RES-321', 23),
(139, 'BIS-21-ME-043', 'OPS-322', 54),
(140, 'BIS-21-ME-043', 'PRG-326', 99),
(141, 'BIS-21-ME-043', 'HWS-323', 31),
(142, 'BIS-21-ME-043', 'DMS-311', 62),
(143, 'BIS-21-ME-043', 'SYS-321', 17),
(144, 'BIS-21-ME-043', 'RES-321', 99),
(145, 'BIT-18-SS-037', 'OPS-322', 39),
(146, 'BIT-18-SS-037', 'PRG-326', 2),
(147, 'BIT-18-SS-037', 'HWS-323', 93),
(148, 'BIT-18-SS-037', 'DMS-311', 56),
(149, 'BIT-18-SS-037', 'SYS-321', 0),
(150, 'BIT-18-SS-037', 'RES-321', 36),
(151, 'BIT-19-SS-007', 'OPS-322', 81),
(152, 'BIT-19-SS-007', 'PRG-326', 97),
(153, 'BIT-19-SS-007', 'HWS-323', 37),
(154, 'BIT-19-SS-007', 'DMS-311', 96),
(155, 'BIT-19-SS-007', 'SYS-321', 67),
(156, 'BIT-19-SS-007', 'RES-321', 49),
(157, 'BIT-19-SS-008', 'OPS-322', 42),
(158, 'BIT-19-SS-008', 'PRG-326', 64),
(159, 'BIT-19-SS-008', 'HWS-323', 93),
(160, 'BIT-19-SS-008', 'DMS-311', 74),
(161, 'BIT-19-SS-008', 'SYS-321', 89),
(162, 'BIT-19-SS-008', 'RES-321', 22),
(163, 'BIT-19-SS-010', 'OPS-322', 46),
(164, 'BIT-19-SS-010', 'PRG-326', 65),
(165, 'BIT-19-SS-010', 'HWS-323', 84),
(166, 'BIT-19-SS-010', 'DMS-311', 26),
(167, 'BIT-19-SS-010', 'SYS-321', 79),
(168, 'BIT-19-SS-010', 'RES-321', 15),
(169, 'BIT-19-SS-020', 'OPS-322', 41),
(170, 'BIT-19-SS-020', 'PRG-326', 57),
(171, 'BIT-19-SS-020', 'HWS-323', 64),
(172, 'BIT-19-SS-020', 'DMS-311', 46),
(173, 'BIT-19-SS-020', 'SYS-321', 39),
(174, 'BIT-19-SS-020', 'RES-321', 56),
(175, 'BIT-19-SS-021', 'OPS-322', 64),
(176, 'BIT-19-SS-021', 'PRG-326', 50),
(177, 'BIT-19-SS-021', 'HWS-323', 61),
(178, 'BIT-19-SS-021', 'DMS-311', 55),
(179, 'BIT-19-SS-021', 'SYS-321', 93),
(180, 'BIT-19-SS-021', 'RES-321', 99),
(181, 'BIT-19-SS-022', 'OPS-322', 13),
(182, 'BIT-19-SS-022', 'PRG-326', 71),
(183, 'BIT-19-SS-022', 'HWS-323', 14),
(184, 'BIT-19-SS-022', 'DMS-311', 58),
(185, 'BIT-19-SS-022', 'SYS-321', 48),
(186, 'BIT-19-SS-022', 'RES-321', 68),
(187, 'BIT-19-SS-023', 'OPS-322', 94),
(188, 'BIT-19-SS-023', 'PRG-326', 65),
(189, 'BIT-19-SS-023', 'HWS-323', 44),
(190, 'BIT-19-SS-023', 'DMS-311', 25),
(191, 'BIT-19-SS-023', 'SYS-321', 94),
(192, 'BIT-19-SS-023', 'RES-321', 93),
(193, 'BIT-19-SS-025', 'OPS-322', 83),
(194, 'BIT-19-SS-025', 'PRG-326', 35),
(195, 'BIT-19-SS-025', 'HWS-323', 27),
(196, 'BIT-19-SS-025', 'DMS-311', 31),
(197, 'BIT-19-SS-025', 'SYS-321', 76),
(198, 'BIT-19-SS-025', 'RES-321', 83),
(199, 'BIT-19-SS-026', 'OPS-322', 85),
(200, 'BIT-19-SS-026', 'PRG-326', 79),
(201, 'BIT-19-SS-026', 'HWS-323', 40),
(202, 'BIT-19-SS-026', 'DMS-311', 62),
(203, 'BIT-19-SS-026', 'SYS-321', 90),
(204, 'BIT-19-SS-026', 'RES-321', 61),
(205, 'BIT-19-SS-031', 'OPS-322', 39),
(206, 'BIT-19-SS-031', 'PRG-326', 9),
(207, 'BIT-19-SS-031', 'HWS-323', 31),
(208, 'BIT-19-SS-031', 'DMS-311', 26),
(209, 'BIT-19-SS-031', 'SYS-321', 39),
(210, 'BIT-19-SS-031', 'RES-321', 17),
(211, 'BIT-20-SS-001', 'OPS-322', 71),
(212, 'BIT-20-SS-001', 'PRG-326', 100),
(213, 'BIT-20-SS-001', 'HWS-323', 85),
(214, 'BIT-20-SS-001', 'DMS-311', 27),
(215, 'BIT-20-SS-001', 'SYS-321', 82),
(216, 'BIT-20-SS-001', 'RES-321', 24),
(217, 'BIT-20-SS-002', 'OPS-322', 80),
(218, 'BIT-20-SS-002', 'PRG-326', 23),
(219, 'BIT-20-SS-002', 'HWS-323', 78),
(220, 'BIT-20-SS-002', 'DMS-311', 20),
(221, 'BIT-20-SS-002', 'SYS-321', 66),
(222, 'BIT-20-SS-002', 'RES-321', 69),
(223, 'BIT-20-SS-003', 'OPS-322', 48),
(224, 'BIT-20-SS-003', 'PRG-326', 33),
(225, 'BIT-20-SS-003', 'HWS-323', 23),
(226, 'BIT-20-SS-003', 'DMS-311', 17),
(227, 'BIT-20-SS-003', 'SYS-321', 14),
(228, 'BIT-20-SS-003', 'RES-321', 19),
(229, 'BIT-20-SS-004', 'OPS-322', 55),
(230, 'BIT-20-SS-004', 'PRG-326', 17),
(231, 'BIT-20-SS-004', 'HWS-323', 21),
(232, 'BIT-20-SS-004', 'DMS-311', 53),
(233, 'BIT-20-SS-004', 'SYS-321', 1),
(234, 'BIT-20-SS-004', 'RES-321', 49),
(235, 'BIT-20-SS-005', 'OPS-322', 41),
(236, 'BIT-20-SS-005', 'PRG-326', 60),
(237, 'BIT-20-SS-005', 'HWS-323', 76),
(238, 'BIT-20-SS-005', 'DMS-311', 99),
(239, 'BIT-20-SS-005', 'SYS-321', 66),
(240, 'BIT-20-SS-005', 'RES-321', 32),
(241, 'BIT-20-SS-006', 'OPS-322', 62),
(242, 'BIT-20-SS-006', 'PRG-326', 16),
(243, 'BIT-20-SS-006', 'HWS-323', 96),
(244, 'BIT-20-SS-006', 'DMS-311', 27),
(245, 'BIT-20-SS-006', 'SYS-321', 49),
(246, 'BIT-20-SS-006', 'RES-321', 65),
(247, 'BIT-20-SS-007', 'OPS-322', 79),
(248, 'BIT-20-SS-007', 'PRG-326', 96),
(249, 'BIT-20-SS-007', 'HWS-323', 43),
(250, 'BIT-20-SS-007', 'DMS-311', 28),
(251, 'BIT-20-SS-007', 'SYS-321', 11),
(252, 'BIT-20-SS-007', 'RES-321', 75),
(253, 'BIT-20-SS-009', 'OPS-322', 36),
(254, 'BIT-20-SS-009', 'PRG-326', 60),
(255, 'BIT-20-SS-009', 'HWS-323', 90),
(256, 'BIT-20-SS-009', 'DMS-311', 68),
(257, 'BIT-20-SS-009', 'SYS-321', 70),
(258, 'BIT-20-SS-009', 'RES-321', 44),
(259, 'BIT-20-SS-010', 'OPS-322', 13),
(260, 'BIT-20-SS-010', 'PRG-326', 32),
(261, 'BIT-20-SS-010', 'HWS-323', 21),
(262, 'BIT-20-SS-010', 'DMS-311', 11),
(263, 'BIT-20-SS-010', 'SYS-321', 91),
(264, 'BIT-20-SS-010', 'RES-321', 20),
(265, 'BIT-20-SS-012', 'OPS-322', 30),
(266, 'BIT-20-SS-012', 'PRG-326', 91),
(267, 'BIT-20-SS-012', 'HWS-323', 63),
(268, 'BIT-20-SS-012', 'DMS-311', 41),
(269, 'BIT-20-SS-012', 'SYS-321', 17),
(270, 'BIT-20-SS-012', 'RES-321', 65),
(271, 'BIT-20-SS-014', 'OPS-322', 71),
(272, 'BIT-20-SS-014', 'PRG-326', 60),
(273, 'BIT-20-SS-014', 'HWS-323', 88),
(274, 'BIT-20-SS-014', 'DMS-311', 56),
(275, 'BIT-20-SS-014', 'SYS-321', 18),
(276, 'BIT-20-SS-014', 'RES-321', 22),
(277, 'BIT-20-SS-015', 'OPS-322', 58),
(278, 'BIT-20-SS-015', 'PRG-326', 20),
(279, 'BIT-20-SS-015', 'HWS-323', 30),
(280, 'BIT-20-SS-015', 'DMS-311', 90),
(281, 'BIT-20-SS-015', 'SYS-321', 55),
(282, 'BIT-20-SS-015', 'RES-321', 8),
(283, 'BIT-20-SS-017', 'OPS-322', 78),
(284, 'BIT-20-SS-017', 'PRG-326', 61),
(285, 'BIT-20-SS-017', 'HWS-323', 74),
(286, 'BIT-20-SS-017', 'DMS-311', 84),
(287, 'BIT-20-SS-017', 'SYS-321', 98),
(288, 'BIT-20-SS-017', 'RES-321', 35),
(289, 'BIT-20-SS-019', 'OPS-322', 85),
(290, 'BIT-20-SS-019', 'PRG-326', 15),
(291, 'BIT-20-SS-019', 'HWS-323', 26),
(292, 'BIT-20-SS-019', 'DMS-311', 85),
(293, 'BIT-20-SS-019', 'SYS-321', 42),
(294, 'BIT-20-SS-019', 'RES-321', 58),
(295, 'BIT-20-SS-022', 'OPS-322', 64),
(296, 'BIT-20-SS-022', 'PRG-326', 46),
(297, 'BIT-20-SS-022', 'HWS-323', 39),
(298, 'BIT-20-SS-022', 'DMS-311', 55),
(299, 'BIT-20-SS-022', 'SYS-321', 60),
(300, 'BIT-20-SS-022', 'RES-321', 34),
(301, 'BIT-20-SS-023', 'OPS-322', 92),
(302, 'BIT-20-SS-023', 'PRG-326', 56),
(303, 'BIT-20-SS-023', 'HWS-323', 3),
(304, 'BIT-20-SS-023', 'DMS-311', 52),
(305, 'BIT-20-SS-023', 'SYS-321', 47),
(306, 'BIT-20-SS-023', 'RES-321', 80),
(307, 'BIT-20-SS-024', 'OPS-322', 56),
(308, 'BIT-20-SS-024', 'PRG-326', 43),
(309, 'BIT-20-SS-024', 'HWS-323', 47),
(310, 'BIT-20-SS-024', 'DMS-311', 5),
(311, 'BIT-20-SS-024', 'SYS-321', 89),
(312, 'BIT-20-SS-024', 'RES-321', 23),
(313, 'BIT-20-SS-026', 'OPS-322', 52),
(314, 'BIT-20-SS-026', 'PRG-326', 92),
(315, 'BIT-20-SS-026', 'HWS-323', 100),
(316, 'BIT-20-SS-026', 'DMS-311', 25),
(317, 'BIT-20-SS-026', 'SYS-321', 25),
(318, 'BIT-20-SS-026', 'RES-321', 51),
(319, 'BIT-20-SS-028', 'OPS-322', 80),
(320, 'BIT-20-SS-028', 'PRG-326', 45),
(321, 'BIT-20-SS-028', 'HWS-323', 87),
(322, 'BIT-20-SS-028', 'DMS-311', 99),
(323, 'BIT-20-SS-028', 'SYS-321', 33),
(324, 'BIT-20-SS-028', 'RES-321', 69),
(325, 'BIT-21-ME-001', 'OPS-322', 46),
(326, 'BIT-21-ME-001', 'PRG-326', 23),
(327, 'BIT-21-ME-001', 'HWS-323', 78),
(328, 'BIT-21-ME-001', 'DMS-311', 19),
(329, 'BIT-21-ME-001', 'SYS-321', 65),
(330, 'BIT-21-ME-001', 'RES-321', 65),
(331, 'BIT-21-ME-002', 'OPS-322', 31),
(332, 'BIT-21-ME-002', 'PRG-326', 63),
(333, 'BIT-21-ME-002', 'HWS-323', 17),
(334, 'BIT-21-ME-002', 'DMS-311', 0),
(335, 'BIT-21-ME-002', 'SYS-321', 48),
(336, 'BIT-21-ME-002', 'RES-321', 40);

-- --------------------------------------------------------

--
-- Table structure for table `lecturers`
--

DROP TABLE IF EXISTS `lecturers`;
CREATE TABLE IF NOT EXISTS `lecturers` (
  `lecturers_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `departments_id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`lecturers_id`),
  KEY `lecturers_ibfk_1` (`departments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `lecturers`
--

INSERT INTO `lecturers` (`lecturers_id`, `first_name`, `last_name`, `departments_id`) VALUES
('CIT-001', 'Patrick', 'Chikumba', 'CIT'),
('CIT-002', 'Mitsunge', 'Malemia', 'CIT'),
('CIT-003', 'Goodall', 'Nyirenda', 'CIT'),
('CIT-004', 'Hope', 'Chilunga', 'CIT'),
('CIT-005', 'Davie', 'Munthali', 'CIT'),
('CIT-006', 'Don', 'Mkavea', 'CIT'),
('CIT-007', 'John', 'Daka', 'CIT');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `modules_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modules_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lecturers_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`modules_id`),
  KEY `lecturers_id` (`lecturers_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`modules_id`, `modules_name`, `lecturers_id`) VALUES
('DMS-311', 'Database Management Systems', 'CIT-003'),
('HWS-323', 'Computer Hardware', 'CIT-004'),
('OPS-322', 'Operating Systems II', 'CIT-006'),
('PRG-326', 'Script Programming ', 'CIT-005'),
('RES-321', 'Research Methods', 'CIT-001'),
('SAD-311', 'System Design', 'CIT-006'),
('SYS-321', 'Information Systems Audit', 'CIT-002');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

DROP TABLE IF EXISTS `programs`;
CREATE TABLE IF NOT EXISTS `programs` (
  `programs_id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `programs_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `departments_id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`programs_id`),
  KEY `department_id` (`departments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`programs_id`, `programs_name`, `departments_id`) VALUES
('BIS', 'Management Information Systems', 'CIT'),
('BIT', 'Information Technology', 'CIT'),
('BME', 'Mechnical Engineering', 'ENE');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `students_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `programs_id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `enrollment_year` year NOT NULL,
  PRIMARY KEY (`students_id`),
  KEY `program_id` (`programs_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`students_id`, `first_name`, `last_name`, `gender`, `programs_id`, `enrollment_year`) VALUES
('BIS-17-SS-030', 'Onesi', 'Alfred', 'M', 'BIS', 2017),
('BIS-18-SS-036', 'Wisdom', 'Geofrey', 'M', 'BIS', 2018),
('BIS-19-SS-002', 'Mary', 'Bwanali', 'F', 'BIS', 2019),
('BIS-19-SS-013', 'Kulinji', 'Patrick', 'M', 'BIS', 2019),
('BIS-19-SS-014', 'Shakira', 'Lundu', 'F', 'BIS', 2019),
('BIS-19-SS-027', 'Samalani', 'Ellen', 'F', 'BIS', 2019),
('BIS-20-EP-031', 'Henderson', 'Fuse', 'M', 'BIS', 2020),
('BIS-20-SS-002', 'Shukuran', 'Buleya', 'M', 'BIS', 2020),
('BIS-20-SS-003', 'Grace', 'Gausi', 'F', 'BIS', 2020),
('BIS-20-SS-004', 'Martin', 'Kabvalo', 'M', 'BIS', 2020),
('BIS-20-SS-005', 'Hope', 'Kalitera', 'F', 'BIS', 2020),
('BIS-20-SS-006', 'Princess', 'Kansilanga', 'F', 'BIS', 2020),
('BIS-20-SS-007', 'Angela', 'Katantha', 'F', 'BIS', 2020),
('BIS-20-SS-014', 'Innocent', 'Makuwila', 'M', 'BIS', 2020),
('BIS-20-SS-015', 'Yamikani', 'Makwinja', 'M', 'BIS', 2020),
('BIS-20-SS-016', 'Innocent', 'Masina', 'M', 'BIS', 2020),
('BIS-20-SS-017', 'Geraldine', 'Mavuka', 'F', 'BIS', 2020),
('BIS-20-SS-019', 'Doreen', 'Mchekeni', 'F', 'BIS', 2020),
('BIS-20-SS-020', 'Zondiwe', 'Mhango', 'F', 'BIS', 2020),
('BIS-20-SS-022', 'Joyce', 'Mtawali', 'F', 'BIS', 2020),
('BIS-20-SS-024', 'Sandile', 'Nyalugwe', 'M', 'BIS', 2020),
('BIS-20-SS-026', 'Jamerah', 'Shaibu', 'F', 'BIS', 2020),
('BIS-20-SS-027', 'Pacharo', 'Simukonda', 'M', 'BIS', 2020),
('BIS-20-SS-030', 'Thokozire', 'Zimba', 'F', 'BIS', 2020),
('BIS-21-ME-043', 'Prince', 'Thawani', 'M', 'BIS', 2021),
('BIT-18-SS-037', 'Mmambo', 'Daniel', 'M', 'BIT', 2018),
('BIT-19-SS-007', 'Chawinga', 'Gideon', 'M', 'BIT', 2019),
('BIT-19-SS-008', 'Laston', 'Chikoko', 'M', 'BIT', 2019),
('BIT-19-SS-010', 'Isaac', 'Chikusa', 'M', 'BIT', 2019),
('BIT-19-SS-020', 'Lumanga', 'Michael', 'M', 'BIT', 2019),
('BIT-19-SS-021', 'Andrew', 'Luwe', 'M', 'BIT', 2019),
('BIT-19-SS-022', 'Febby', 'Malinda', 'F', 'BIT', 2019),
('BIT-19-SS-023', 'Mkumbukeni', 'Mhone', 'M', 'BIT', 2019),
('BIT-19-SS-025', 'Brilliantina', 'Pengani', 'F', 'BIT', 2019),
('BIT-19-SS-026', 'Margret', 'Phikani', 'F', 'BIT', 2019),
('BIT-19-SS-031', 'Aubrey', 'Sentala', 'M', 'BIT', 2019),
('BIT-20-SS-001', 'Bentley', 'Chipandula', 'M', 'BIT', 2020),
('BIT-20-SS-002', 'Silvester', 'Chunga', 'M', 'BIT', 2020),
('BIT-20-SS-003', 'John', 'Daka', 'M', 'BIT', 2020),
('BIT-20-SS-004', 'Fahad', 'Daud', 'M', 'BIT', 2020),
('BIT-20-SS-005', 'Victoria', 'Gondwe', 'F', 'BIT', 2020),
('BIT-20-SS-006', 'Comfort', 'Howse', 'F', 'BIT', 2020),
('BIT-20-SS-007', 'Blessings', 'Isaac', 'M', 'BIT', 2020),
('BIT-20-SS-009', 'Esmie', 'Luphande', 'F', 'BIT', 2020),
('BIT-20-SS-010', 'Andrew', 'Makaula', 'M', 'BIT', 2020),
('BIT-20-SS-012', 'Alice', 'Mandalasi', 'F', 'BIT', 2020),
('BIT-20-SS-014', 'Israel', 'Mbewe', 'M', 'BIT', 2020),
('BIT-20-SS-015', 'Wisdom', 'Mbolembole', 'M', 'BIT', 2020),
('BIT-20-SS-017', 'Mkandawire', 'Olivia', 'F', 'BIT', 2020),
('BIT-20-SS-019', 'Ahmed', 'Mpoya', 'M', 'BIT', 2020),
('BIT-20-SS-022', 'Ken', 'Nyirenda', 'M', 'BIT', 2020),
('BIT-20-SS-023', 'Sauda', 'Rafick', 'F', 'BIT', 2020),
('BIT-20-SS-024', 'Alex', 'Sambani', 'M', 'BIT', 2020),
('BIT-20-SS-026', 'Amour', 'Vido', 'M', 'BIT', 2020),
('BIT-20-SS-028', 'Nyasha', 'Mpinda', 'F', 'BIT', 2020),
('BIT-21-ME-001', 'Willard', 'Chimphalika', 'M', 'BIT', 2021),
('BIT-21-ME-002', 'Madalitso', 'Muva', 'M', 'BIT', 2021);

-- --------------------------------------------------------

--
-- Table structure for table `student_average_grades`
--

DROP TABLE IF EXISTS `student_average_grades`;
CREATE TABLE IF NOT EXISTS `student_average_grades` (
  `students_id` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `average_grade` decimal(13,2) DEFAULT NULL,
  `grade_category` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_average_grades`
--

INSERT INTO `student_average_grades` (`students_id`, `first_name`, `last_name`, `average_grade`, `grade_category`) VALUES
('BIS-17-SS-030', 'Onesi', 'Alfred', '51.67', 'Pass'),
('BIS-18-SS-036', 'Wisdom', 'Geofrey', '52.33', 'Pass'),
('BIS-19-SS-002', 'Mary', 'Bwanali', '50.17', 'Pass'),
('BIS-19-SS-013', 'Kulinji', 'Patrick', '58.67', 'Pass'),
('BIS-19-SS-014', 'Shakira', 'Lundu', '46.67', 'Fail'),
('BIS-19-SS-027', 'Samalani', 'Ellen', '40.67', 'Fail'),
('BIS-20-EP-031', 'Henderson', 'Fuse', '59.17', 'Pass'),
('BIS-20-SS-002', 'Shukuran', 'Buleya', '50.50', 'Pass'),
('BIS-20-SS-003', 'Grace', 'Gausi', '42.50', 'Fail'),
('BIS-20-SS-004', 'Martin', 'Kabvalo', '58.00', 'Pass'),
('BIS-20-SS-005', 'Hope', 'Kalitera', '52.00', 'Pass'),
('BIS-20-SS-006', 'Princess', 'Kansilanga', '44.83', 'Fail'),
('BIS-20-SS-007', 'Angela', 'Katantha', '46.83', 'Fail'),
('BIS-20-SS-014', 'Innocent', 'Makuwila', '32.33', 'Fail'),
('BIS-20-SS-015', 'Yamikani', 'Makwinja', '67.83', 'Credit'),
('BIS-20-SS-017', 'Geraldine', 'Mavuka', '38.17', 'Fail'),
('BIS-20-SS-019', 'Doreen', 'Mchekeni', '53.67', 'Pass'),
('BIS-20-SS-020', 'Zondiwe', 'Mhango', '46.00', 'Fail'),
('BIS-20-SS-022', 'Joyce', 'Mtawali', '61.00', 'Credit'),
('BIS-20-SS-024', 'Sandile', 'Nyalugwe', '43.67', 'Fail'),
('BIS-20-SS-026', 'Jamerah', 'Shaibu', '45.67', 'Fail'),
('BIS-20-SS-027', 'Pacharo', 'Simukonda', '46.50', 'Fail'),
('BIS-20-SS-030', 'Thokozire', 'Zimba', '51.83', 'Pass'),
('BIS-21-ME-043', 'Prince', 'Thawani', '60.33', 'Credit'),
('BIT-18-SS-037', 'Mmambo', 'Daniel', '37.67', 'Fail'),
('BIT-19-SS-007', 'Chawinga', 'Gideon', '71.17', 'Credit'),
('BIT-19-SS-008', 'Laston', 'Chikoko', '64.00', 'Credit'),
('BIT-19-SS-010', 'Isaac', 'Chikusa', '52.50', 'Pass'),
('BIT-19-SS-020', 'Lumanga', 'Michael', '50.50', 'Pass'),
('BIT-19-SS-021', 'Andrew', 'Luwe', '70.33', 'Credit'),
('BIT-19-SS-022', 'Febby', 'Malinda', '45.33', 'Fail'),
('BIT-19-SS-023', 'Mkumbukeni', 'Mhone', '69.17', 'Credit'),
('BIT-19-SS-025', 'Brilliantina', 'Pengani', '55.83', 'Pass'),
('BIT-19-SS-026', 'Margret', 'Phikani', '69.50', 'Credit'),
('BIT-19-SS-031', 'Aubrey', 'Sentala', '26.83', 'Fail'),
('BIT-20-SS-001', 'Bentley', 'Chipandula', '64.83', 'Credit'),
('BIT-20-SS-002', 'Silvester', 'Chunga', '56.00', 'Pass'),
('BIT-20-SS-003', 'John', 'Daka', '25.67', 'Fail'),
('BIT-20-SS-004', 'Fahad', 'Daud', '32.67', 'Fail'),
('BIT-20-SS-005', 'Victoria', 'Gondwe', '62.33', 'Credit'),
('BIT-20-SS-006', 'Comfort', 'Howse', '52.50', 'Pass'),
('BIT-20-SS-007', 'Blessings', 'Isaac', '55.33', 'Pass'),
('BIT-20-SS-009', 'Esmie', 'Luphande', '61.33', 'Credit'),
('BIT-20-SS-010', 'Andrew', 'Makaula', '31.33', 'Fail'),
('BIT-20-SS-012', 'Alice', 'Mandalasi', '51.17', 'Pass'),
('BIT-20-SS-014', 'Israel', 'Mbewe', '52.50', 'Pass'),
('BIT-20-SS-015', 'Wisdom', 'Mbolembole', '43.50', 'Fail'),
('BIT-20-SS-017', 'Mkandawire', 'Olivia', '71.67', 'Credit'),
('BIT-20-SS-019', 'Ahmed', 'Mpoya', '51.83', 'Pass'),
('BIT-20-SS-022', 'Ken', 'Nyirenda', '49.67', 'Fail'),
('BIT-20-SS-023', 'Sauda', 'Rafick', '55.00', 'Pass'),
('BIT-20-SS-024', 'Alex', 'Sambani', '43.83', 'Fail'),
('BIT-20-SS-026', 'Amour', 'Vido', '57.50', 'Pass'),
('BIT-20-SS-028', 'Nyasha', 'Mpinda', '68.83', 'Credit'),
('BIT-21-ME-001', 'Willard', 'Chimphalika', '49.33', 'Fail'),
('BIT-21-ME-002', 'Madalitso', 'Muva', '33.17', 'Fail');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`students_id`) REFERENCES `students` (`students_id`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`modules_id`) REFERENCES `modules` (`modules_id`);

--
-- Constraints for table `lecturers`
--
ALTER TABLE `lecturers`
  ADD CONSTRAINT `lecturers_ibfk_1` FOREIGN KEY (`departments_id`) REFERENCES `departments` (`departments_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `modules`
--
ALTER TABLE `modules`
  ADD CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`lecturers_id`) REFERENCES `lecturers` (`lecturers_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `programs`
--
ALTER TABLE `programs`
  ADD CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`departments_id`) REFERENCES `departments` (`departments_id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`programs_id`) REFERENCES `programs` (`programs_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
