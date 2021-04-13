import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://bscscan.com/address/0xb5fd5e4bafc490e99ace8d9168cb4d700fd41b57" target="_blank">Contract F✨</StyledLink>
      <StyledLink href="https://twitter.com/SafeFarmBSC" target="_blank">Twitter</StyledLink>
      <StyledLink href="https://t.me/SafeDao" target="_blank">Telegram</StyledLink>
      <StyledLink href="https://safedao.medium.com" target="_blank">Medium</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`

export default Nav
