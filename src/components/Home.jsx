import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="home__liveAnywhere">
        <h2 className="font-weight-bold mb-3">Live anywhere</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <Card
              src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
              title="Entire homes"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Card
              src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
              title="Cabins and cottages"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Card
              src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
              title="Unique stays"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <Card
              src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=720"
              title="Pets welcome"
            />
          </div>
        </div>
      </section>
      <section className="home__liveAnywhere">
        <h2 className="font-weight-bold mb-3">Join millions of hosts on Airbnb</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <Card
              src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720"
              title="Entire homes"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Card
              src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720"
              title="Cabins and cottages"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <Card
              src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720"
              title="Unique stays"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
