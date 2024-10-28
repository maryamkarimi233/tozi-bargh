import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { FiMenu, FiChevronRight, FiChevronDown, FiFolder, FiFile } from 'react-icons/fi';
import './Tree.css';

const TreeNode = ({ label, children, isOpen, toggleOpen }) => {
  return (
    <Box className="tree-node">
      <Flex align="center" onClick={toggleOpen} className="tree-node-label">
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        <FiFolder />
        <Text>{label}</Text>
      </Flex>
      {isOpen && <Box className="tree-children">{children}</Box>}
    </Box>
  );
};

const Tree = () => {
  const [openNodes, setOpenNodes] = useState({});

  const toggleNode = (node) => {
    setOpenNodes((prevState) => ({
      ...prevState,
      [node]: !prevState[node],
    }));
  };

  return (
    <Box as="nav" className="tree">
      <IconButton
        icon={<FiMenu />}
        aria-label="Menu"
        className="menu-icon"
      />
      <Flex direction="column" className="tree-content">
        <TreeNode
          label="گره ۱"
          isOpen={openNodes['node1']}
          toggleOpen={() => toggleNode('node1')}
        >
          <Link to="/node1/child1" className="tree-item">
            <FiFile />
            <Text>گره ۱.۱</Text>
          </Link>
          <Link to="/node1/child2" className="tree-item">
            <FiFile />
            <Text>گره ۱.۲</Text>
          </Link>
          <TreeNode
            label="گره ۱.۳"
            isOpen={openNodes['node1_3']}
            toggleOpen={() => toggleNode('node1_3')}
          >
            <Link to="/node1/child3/child1" className="tree-item">
              <FiFile />
              <Text>گره ۱.۳.۱</Text>
            </Link>
            <Link to="/node1/child3/child2" className="tree-item">
              <FiFile />
              <Text>گره ۱.۳.۲</Text>
            </Link>
          </TreeNode>
        </TreeNode>
        <TreeNode
          label="گره ۲"
          isOpen={openNodes['node2']}
          toggleOpen={() => toggleNode('node2')}
        >
          <Link to="/node2/child1" className="tree-item">
            <FiFile />
            <Text>گره ۲.۱</Text>
          </Link>
          <Link to="/node2/child2" className="tree-item">
            <FiFile />
            <Text>گره ۲.۲</Text>
          </Link>
          <TreeNode
            label="گره ۲.۳"
            isOpen={openNodes['node2_3']}
            toggleOpen={() => toggleNode('node2_3')}
          >
            <Link to="/node2/child3/child1" className="tree-item">
              <FiFile />
              <Text>گره ۲.۳.۱</Text>
            </Link>
            <Link to="/node2/child3/child2" className="tree-item">
              <FiFile />
              <Text>گره ۲.۳.۲</Text>
            </Link>
          </TreeNode>
        </TreeNode>
      </Flex>
    </Box>
  );
};

export default Tree;
