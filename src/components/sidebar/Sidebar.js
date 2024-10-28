import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { FiMenu, FiHome, FiUser, FiBriefcase, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Side.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsSubMenuOpen(false);
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box as="nav" className={`sidebar ${isOpen ? 'open' : ''}`}>
      <IconButton
        icon={<FiMenu />}
        aria-label="Menu"
        onClick={toggleSidebar}
        className="menu-icon"
      />
      <Flex direction="column" align="flex-start" className="sidebar-content">
        <Link to="/" className="sidebar-item"><FiHome /><Text>خانه</Text></Link>
        <Link to="/about" className="sidebar-item"><FiUser /><Text>درباره</Text></Link>
        <Box className="sidebar-item" onClick={toggleSubMenu}>
          <Flex align="center" justify="space-between" width="100%">
            <Flex align="center"><FiBriefcase /><Text>خدمات</Text></Flex>
            {isSubMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
          </Flex>
          {isSubMenuOpen && (
            <Box className="sidebar-submenu">
              <Link to="/services/consulting" className="sidebar-subitem"><Text>خدمات مشاوره</Text></Link>
              <Link to="/services/financial" className="sidebar-subitem"><Text>خدمات مالی</Text></Link>
              <Link to="/services/education" className="sidebar-subitem"><Text>خدمات آموزشی</Text></Link>
            </Box>
          )}
        </Box>
        <Link to="/contact" className="sidebar-item"><FiMail /><Text>تماس</Text></Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
