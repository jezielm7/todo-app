import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
`;

export const Form = styled.View`
  padding: 0;
  height: 60px;
  margin-top: 13px;

  flex-direction: row;
  align-self: stretch;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  padding: 5px 10px;
  border-radius: 8px;

  color: #000;
  background-color: #eee;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  background-color: #ff2748;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const ListView = styled.View`
  flex: 1;
`;

export const List = styled.FlatList`
  flex: 1;
  margin-left: 5px;
`;

export const Card = styled.View`
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;

  flex-direction: row;
  background-color: #eee;

  align-items: center;
  justify-content: space-between;
`;

export const TaskTitle = styled.Text`
  color: #333;
  margin-top: 4px;
  font-size: 14px;

  font-weight: bold;
  text-align: center;
`;

export const TrashButton = styled.TouchableOpacity``;
