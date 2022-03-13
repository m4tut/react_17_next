import Router from 'next/router';
import { FC } from 'react';

// Components
import { Button, Result } from 'antd';
import { Container } from '~shared/layouts/Container';

// styles
import cl from 'classnames';
import styles from './Error404.module.scss';

const Error404: FC = () => {
  return (
    <Container className={cl(styles['error'])}>
      <Result
        className={cl(styles['error__content'])}
        status='404'
        title='404'
        subTitle='Извините, страница, которую вы посетили, не существует.'
        extra={
          <Button type='primary' onClick={() => Router.push('/')}>
            Вернуться на главную
          </Button>
        }
      />
    </Container>
  );
};

export default Error404;
