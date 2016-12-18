/********************************************************************
DATABASE SEED FILE
*********************************************************************/

-- ENVIRONMENT CONTROL
-- /*!40101 SET NAMES utf8 */;
-- /*!40101 SET SQL_MODE=''*/;
-- /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
-- /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
-- /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
-- /*!40100 DEFAULT CHARACTER SET latin1 */;
-- /*!32312 CREATE DATABASE  IF NOT EXISTS `database`; USE `database`*/;
-- END: environment control

CREATE DATABASE IF NOT EXISTS `bamazon`; USE `bamazon`;

-- TABLE STRUCTURE
DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `ItemID` INT AUTO_INCREMENT NOT NULL,
  `ProductName` VARCHAR(255) NOT NULL,
  `DepartmentName` VARCHAR(255) NOT NULL,
  `Price` DECIMAL(10,2) NOT NULL,
  `StockQuantity` INT NOT NULL,
  PRIMARY KEY (`ItemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
-- END: table structure

-- SEED
INSERT  INTO `Products` ( `ProductName`       , `DepartmentName` , `Price` , `StockQuantity` ) VALUES
                        ( 'Warmup Jacket'     , 'Warmups'        , 49.99   , 23              ),
                        ( 'Warmup Pants'      , 'Warmups'        , 45.99   , 42              ),
                        ( 'Sweatshirt'        , 'Sweatshirt'     , 39.99   , 23              ),
                        ( 'Hooded Sweatshirt' , 'Sweatshirt'     , 49.99   , 12              ),
                        ( 'Blanket'           , 'Sweatshirt'     , 60.00   , 81              ),
                        ( 'Grey Shirt'        , 'T-Shirts'       , 24.95   , 72              ),
                        ( 'Longsleeve'        , 'Shirts'         , 29.99   , 54              ),
                        ( 'Black Shirt'       , 'T-Shirts'       , 24.95   , 27              ),
                        ( 'Dri-Fit Polo'      , 'Polos'          , 35.99   , 48              ),
                        ( 'Vapor X800'        , 'Hockey Gloves'  , 99.99   , 41              );
-- END: seed
