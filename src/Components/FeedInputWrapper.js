import { Search } from "@mui/icons-material";

import { Flex } from "../Styledcomponents/styledComponents";

function FeedInputWrapper({ PostValue, HandleSubmit, setPostValue }) {
  const Onchange = (e) => {
    e.preventDefault();
    let UpdatedPostValue = e.target.value;
    setPostValue(UpdatedPostValue);
  };
  return (
    <Flex justify="start" className="Feed__inputwrapper">
      <Search />
      <form onSubmit={HandleSubmit}>
        <input
          value={PostValue}
          onChange={Onchange}
          placeholder="Start a Post"
        />
      </form>
    </Flex>
  );
}

export default FeedInputWrapper;
