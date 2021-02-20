import SectionHeader from "../components/moonstone/SectionHeader";
import "../assets/css/moonstone.css";
import "../assets/css/badgedex.css";
import { useEffect, useState } from "react";
import { useUser } from "../components/moonstone/context/user";
import Button from "../components/moonstone/Button";
import API from "../utils/api";

const Badge = ({ badge, is_owned, grid }) => {
  return (
    <div className={`badge ${is_owned && "owned"} ${grid}`}>
      <div class="center-image">
        <img
          src={badge.avatar}
          className={is_owned ? "owned" : "normal"}
          alt="Error"
        ></img>
      </div>
      <div className="name">{badge.name}</div>
      <div className="id">#{badge.id}</div>
    </div>
  );
};

const Filters = ({ show_all, onShowChange /*category, onCategoryChange*/ }) => {
  return (
    <div className="filters">
      {/* <div className="flex">
        <span class="bold">Filter by</span>
        <option>XXX</option>
      </div> */}
      <div className="flex">
        <span className="bold">Show</span>
        <Button
          noBack={!show_all}
          onClick={() => onShowChange(true)}
          style={{ padding: "10px" }}
          width="88px"
        >
          All
        </Button>
        <Button
          noBack={show_all}
          onClick={() => onShowChange(false)}
          style={{ padding: "10px" }}
          width="88px"
        >
          Owned
        </Button>
      </div>
    </div>
  );
};

export default function Badgedex(params) {
  const [badges, setBadges] = useState([]);
  const [owned_badges, setOwnedBadges] = useState([]);
  const [filtered_badges, setFilteredBadges] = useState([]);
  const [filtered_owned_badges, setFilteredOwnedBagdes] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const { data } = await API.get(`/api/v1/badges`);
      const all_badges = data.data;
      console.log("BADGES:", all_badges);

      const filtered_badges = all_badges.filter(
        (badge) => !owned_badges.some((b) => b.id === badge.id)
      );

      setFilteredBadges(filtered_badges);
      setBadges(filtered_badges);
    };
    fetchBadges();
  }, [owned_badges]);

  const { user } = useUser();
  useEffect(() => {
    const fetchOwnedBadges = async () => {
      if (user?.id) {
        const { data } = await API.get(`/api/v1/attendees/${user.id}`);

        setOwnedBadges(data.data.badges);
        setFilteredOwnedBagdes(data.data.badges);
      }
    };
    fetchOwnedBadges();
  }, [user.id]);

  const [show_all, setShowAll] = useState(true);
  // const [category, setCategory] = useState("");

  const handleShowAllChange = (show) => {
    setShowAll(show);
  };

  // const handleCategoryChange = (category) => {
  //   setCategory(category);
  //   if (category !== "") {
  //     const filtered_owned = owned_badges.filter(
  //       (b) => b.type.toUpperCase() === category.toUpperCase()
  //     );
  //     setFilteredOwnedBagdes(filtered_owned);

  //     const filtered = badges.filter(
  //       (b) => b.type.toUpperCase() === category.toUpperCase()
  //     );
  //     setFilteredBadges(filtered);
  //   } else {
  //     setFilteredOwnedBagdes(owned_badges);
  //     const filtered_badges = badges.filter(
  //       (badge) => !owned_badges.some((b) => b.id === badge.id)
  //     );
  //     setFilteredBadges(filtered_badges);
  //   }
  // };

  return (
    <div className="userProfile">
      <SectionHeader
        title="Badgedex"
        subtitle="Exploring all existing badges"
      ></SectionHeader>

      <Filters
        show_all={show_all}
        // category={category}
        onShowChange={handleShowAllChange}
        // onCategoryChange={handleCategoryChange}
      ></Filters>

      <div className="main">
        <div className="badgedex">
          {filtered_owned_badges &&
            filtered_owned_badges.map((b) => (
              <Badge
                key={b.id}
                badge={b}
                is_owned={true}
                grid="col-xs-6 col-md-4 col-lg-3 col-xl-2"
              ></Badge>
            ))}
          {show_all &&
            filtered_badges &&
            filtered_badges.map((b) => (
              <Badge
                key={b.id}
                badge={b}
                is_owned={false}
                grid="col-xs-6 col-md-4 col-lg-3 col-xl-2"
              ></Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
