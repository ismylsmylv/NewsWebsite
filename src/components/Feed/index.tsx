import LocalNews from "../LocalNews";
import PicsForYou from "../PicsForYou";
import TopStories from "../TopStories";
import "./style.scss";
type Props = { news: object[] };

function Feed({ news }: Props) {
  return (
    <div className="feed container">
      <div className="left">
        <TopStories news={news} />
      </div>
      <div className="right">
        <LocalNews news={news} />
        <PicsForYou news={news} />
      </div>
    </div>
  );
}

export default Feed;
