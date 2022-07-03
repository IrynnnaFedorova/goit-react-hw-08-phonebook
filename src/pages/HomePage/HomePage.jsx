import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink, Navigate } from 'react-router-dom';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Button from '../../components/Button';
import s from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (<>
    {isLoggedIn ? (
      <Navigate to='/contacts' />
    ):(
        <Section>
          <Container>
            <div className={s.home}>
              
              <p className={s.text}>Please register or login</p>
              <div className={s.navigation_buttons}>
                <NavLink to="/register" className={s.link}>
                  <Button type={'button'} title={'Register'} />
                </NavLink>
                <NavLink to="/login" className={s.link}>
                  <Button type={'button'} title={'Login'} />
                </NavLink>
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};