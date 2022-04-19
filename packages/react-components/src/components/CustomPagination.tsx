import { Pagination } from "@mui/material";

const COUNT_PER_PAGE = 10;

interface CustomPaginationProps {
  totalCount: number;
  page: number;
  onChange: (page: number) => void;
}

export const CustomPagination = (props: CustomPaginationProps) => {
  const pageCount = Math.ceil(props.totalCount / COUNT_PER_PAGE);

  return (
    <Pagination
      shape="rounded"
      count={pageCount}
      page={props.page}
      onChange={(_, page) => props.onChange(page)}
    />
  );
};
