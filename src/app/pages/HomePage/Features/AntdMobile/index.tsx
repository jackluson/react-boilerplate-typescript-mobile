import React from 'react';
import { Button, Toast, List } from 'antd-mobile';
import styled from 'styled-components/macro';

export function AntdMobileDemo() {
  const handleClick = (e: React.MouseEvent) => {
    console.log(e);
    Toast.info('This is a toast tips !!!', 1);
  };
  return (
    <Wrapper>
      <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
        <List.Item
          extra={
            <Button type="ghost" size="small" inline onClick={handleClick}>
              small
            </Button>
          }
        >
          a antd-mobile demo
          <List.Item.Brief>
            Can be collected, refund, discount management, view data and other
            operations
          </List.Item.Brief>
        </List.Item>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
