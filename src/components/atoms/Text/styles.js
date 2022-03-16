import styled from 'styled-components/native'

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  font-family: 'SourceSansPro_700Bold';
  font-weight: bold;
  margin-top: ${({ theme }) => theme.metrics.px(15)}px;
  color: ${({ color, theme }) => theme.colors[color || 'white']};
`
