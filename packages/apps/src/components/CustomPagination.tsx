import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    color: "#ffffff",
    "& .MuiPaginationItem-text": {
      backgroundColor: "transparent",
      color: "#818181",
    },
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "#ffffff",
    },
  },
});

const COUNT_PER_PAGE = 10;

interface CustomPaginationProps {
  totalCount: number;
  page: number;
  onChange: (page: number) => void;
}

export const CustomPagination = (props: CustomPaginationProps) => {
  const classes = useStyles();
  const pageCount = Math.ceil(props.totalCount / COUNT_PER_PAGE);

  return (
    <Pagination
      shape="rounded"
      count={pageCount}
      page={props.page}
      onChange={(_, page) => props.onChange(page)}
      className={classes.root}
    />
  );
};
