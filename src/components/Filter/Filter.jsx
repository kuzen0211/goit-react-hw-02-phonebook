import { Label, Input } from './Filter.styled';

export const Filter = ({ filterContact }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" onChange={filterContact}></Input>
      </Label>
    </div>
  );
};
