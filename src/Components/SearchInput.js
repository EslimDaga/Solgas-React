import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Paper, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "4px",
    alignItems: "center",
    display: "flex",
    flexBasis: 420
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px"
  }
}));

const SearchInput = props => {
  const { className, onChange, style, placeholder, ...rest } = props;
  const classes = useStyles();

  return (
    <Paper {...rest} className={clsx(classes.root, className)} style={style}>
      <SearchIcon  />
      <Input
        {...rest}
        placeholder={placeholder}
        className={classes.input}
        disableUnderline
        onChange={onChange}
      />
    </Paper>
  );
};

SearchInput.defaultProps = {
  placeholder: "Buscar",
}

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default SearchInput;
