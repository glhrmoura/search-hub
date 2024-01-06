import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 6px;
  overflow: hidden;

  & a:first-child div {
    border-radius: 6px 6px 0px 0px;
  }

  & a:last-child div {
    border-radius: 0px 0px 6px 6px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.mdl}px;
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.mdl}px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  flex: 1;
  border-radius: 6px;
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray700};
  border: none;
  outline: none;
`;

export const Message = styled.p`
  padding: ${({ theme }) => theme.spacing.mdl}px;
  align-self: center;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray400};
  margin: ${({ theme }) => theme.spacing.lg}px 0px;
`;

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.lg}px 0px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.2);
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  align-self: stretch;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  padding: 0px ${({ theme }) => theme.spacing.mdl}px;
  background-color: ${({ theme }) => theme.colors.green400};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.green400};
  }
`;