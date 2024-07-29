import { useRef, useState } from "react";
import { Button } from "../../../common/Button/Button";
import { NoticeSearchStyled } from "./styled";
import { useNavigate } from "react-router-dom";

export const NoticeSearch = () => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const title = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handlerSearch = () => {
    // 검색 버튼을 누르면, 조회가 된다.
    const query: string[] = [];

    !title.current?.value || query.push(`searchTitle=${title.current?.value}`);
    !startDate || query.push(`startDate=${startDate}`);
    !endDate || query.push(`endDate=${endDate}`);

    const queryString = query.length > 0 ? `?${query.join("&")}` : "";
    navigate(`/react/board/notice.do${queryString}`);
  };

  return (
    <NoticeSearchStyled>
      <input ref={title}></input>
      <input type="date" onChange={(e) => setStartDate(e.target.value)}></input>
      <input type="date" onChange={(e) => setEndDate(e.target.value)}></input>
      <Button onClick={handlerSearch}>검색</Button>
      <Button onClick={handlerSearch}>등록</Button>
    </NoticeSearchStyled>
  );
};
