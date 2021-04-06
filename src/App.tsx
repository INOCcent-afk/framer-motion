import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Page1 = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.page1 }}>
        <p style={styles.copy}>This is page 1</p>
        <Link style={{ ...styles.copy, ...styles.link }} to="/page2">
          Go to Page 2
        </Link>
      </div>
    </motion.div>
  );
};

const Page2 = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.page2 }}>
        <p style={styles.copy}>This is page 2</p>
        <Link style={{ ...styles.copy, ...styles.link }} to="/">
          Go to Page 1
        </Link>
      </div>
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/page2" exact>
          <Page2 />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    flexGrow: 1,
  },
  page1: {
    backgroundColor: "#fe4a49",
  },
  page2: {
    backgroundColor: "#2ab7ca",
  },
  copy: {
    color: "white",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "bold",
    fontSize: 32,
  },
  link: {
    color: "white",
    display: "block",
    marginTop: 10,
  },
};

export default App;
