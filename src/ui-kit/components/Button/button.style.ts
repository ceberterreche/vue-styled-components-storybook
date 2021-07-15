import styled from 'vue-styled-components';

export type Variant = 'primary' | 'secondary';

const ButtonProps = {
  variant: String,
  rounded: Boolean,
};

export const StyledButton = styled('button', ButtonProps)`
  background-color: ${(props: any) => (props.variant === 'primary' ? 'blue' : 'green')};
  color: ${(props: any) => (props.variant === 'primary' ? 'white' : 'black')};
  display: flex;
  transition: background-color 1s;
  align-items: center;
  justify-content: center;
  padding: 16px 80px;
  border-radius: ${(props: any) => (props.rounded ? '100px' : '8px')};
`;
