import React from 'react';
import { css } from '@emotion/react';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';
// import { RiCheckFill } from 'react-icons/ri';
import TodoListIcon from 'assets/images/todo-list-icon.png';

interface Props {
  count: number;
  all: number;
}

function TodoHeader({ count, all }: Props) {
  const { isMobile } = useResponsive();
  return (
    <header css={headerContainer({ isMobile })}>
      <h2>To Do List</h2>
      <div>
        {all > 0 ? (
          <>
            <span>{all}</span>개의 할 일 중 &nbsp;&nbsp;<span>{count}</span>
            개를 완료했어요!
          </>
        ) : (
          '할 일을 작성하고 계획을 관리해보세요!'
        )}
      </div>
      <img src={TodoListIcon} />
    </header>
  );
}

const headerContainer = ({ isMobile }: IsResponsive) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--mainOp2);
  height: ${isMobile ? '100px' : '140px'};
  padding: ${isMobile ? '24px 20px' : '34px 40px'};
  margin-bottom: 40px;
  border-radius: ${isMobile ? '10px' : '10px'};
  & h2 {
    font-size: var(--fontMd);
    font-weight: 600;
    margin-bottom: var(--fontMd);
  }
  & div {
    & span {
      font-size: var(--fontLg);
      margin-right: 4px;
      margin-bottom: 2px;
      font-weight: bold;
      color: var(--main);
    }
  }
  & img {
    position: absolute;
    top: ${isMobile ? '-5px' : '-20px'};
    right: ${isMobile ? '-20px' : '20px'};
    height: ${isMobile ? '110px' : '170px'};
    filter: brightness(1.08);
  }
`;

export default TodoHeader;
