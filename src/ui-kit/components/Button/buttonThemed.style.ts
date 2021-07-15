import styled from 'vue-styled-components';

export type Variant = 'primary' | 'secondary';

const ButtonProps = {
  variant: String,
  rounded: Boolean,
};

export const StyledButton = styled('button', ButtonProps)`
  background-color: ${(props: any) => (props.variant === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
  color: ${(props: any) => (props.variant === 'primary' ? props.theme.colors.white : props.theme.colors.black_1)};
  display: flex;
  transition: background-color 1s;
  align-items: center;
  justify-content: center;
  padding: 16px 80px;
  border-radius: ${(props: any) => (props.rounded ? '100px' : '8px')};
  &:hover {
    background-color: ${(props: any) => (props.variant === 'primary' ? props.theme.colors.primary_hover : props.theme.colors.secondary)};
    transition: background-color 100ms linear;
  }
  &:active {
    background-color: ${(props: any) => (props.variant === 'primary' ? props.theme.colors.primary_active : props.theme.colors.secondary)};
  }
`;
