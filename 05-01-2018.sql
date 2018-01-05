CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`,`first_name`,`last_name`) VALUES (1,'pipat','thammakosol');
INSERT INTO `user` (`id`,`first_name`,`last_name`) VALUES (2,'test','test');