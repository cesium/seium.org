import SectionHeader from "../components/moonstone/SectionHeader";
import "../assets/css/moonstone.css";
import "../assets/css/badgedex.css";
import { useEffect, useState } from "react";
import { useUser } from "../components/moonstone/context/user";
import Button from "../components/moonstone/Button";
import API from "../utils/api";
import BadgePage from "./Badge";

const Badge = ({ badge, is_owned, grid, handleClick }) => {
  return (
    <div
      className={`badge ${is_owned && "owned"} ${grid}`}
      onClick={handleClick}
    >
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

const Filters = ({ show_all, onShowChange, category, onCategoryChange }) => {
  const badge_types = [
    { type: -1, text: "All" },
    { type: 4, text: "Companies" },
    { type: 6, text: "Talks" },
    { type: 7, text: "Workshops" },
    { type: 2, text: "Challenges" },
    { type: 3, text: "Days" },
    { type: 8, text: "Others" },
  ];

  return (
    <div className="filters">
      <div className="flex">
        <span className="bold">Filter by</span>
        <select
          value={category}
          onChange={onCategoryChange}
          className="dropdown"
        >
          {badge_types.map((b) => (
            <option value={b.type}>{b.text}</option>
          ))}
        </select>
      </div>
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
  const [badge_selected, setBadgeSelected] = useState(false);

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
  const [category, setCategory] = useState(-1);

  const handleShowAllChange = (show) => {
    setShowAll(show);
  };

  const handleCategoryChange = (category) => {
    const cat = parseInt(category.target.value);
    setCategory(cat);

    if (cat !== -1) {
      const filtered_owned = owned_badges.filter((b) => b.type === cat);
      setFilteredOwnedBagdes(filtered_owned);

      const filtered = badges.filter((b) => b.type === cat);
      setFilteredBadges(filtered);
    } else {
      setFilteredOwnedBagdes(owned_badges);
      const filtered_badges = badges.filter(
        (badge) => !owned_badges.some((b) => b.id === badge.id)
      );
      setFilteredBadges(filtered_badges);
    }
  };

  const handleBadgeReset = () => {
    setBadgeSelected(false);
  };

  return !badge_selected ? (
    <div className="userProfile">
      <SectionHeader
        title="Badgedex"
        subtitle="Exploring all existing badges"
      ></SectionHeader>

      <Filters
        show_all={show_all}
        category={category}
        onShowChange={handleShowAllChange}
        onCategoryChange={handleCategoryChange}
      ></Filters>

      <div className="main">
        <div className="badgedex">
          {filtered_owned_badges &&
            filtered_owned_badges.map((b) => (
              <Badge
                key={b.id}
                badge={b}
                is_owned
                handleClick={() => setBadgeSelected(b)}
                grid="col-xs-6 col-md-4 col-lg-3 col-xl-2"
              ></Badge>
            ))}
          {show_all &&
            filtered_badges &&
            filtered_badges.map((b) => (
              <Badge
                key={b.id}
                badge={b}
                handleClick={() => setBadgeSelected(b)}
                grid="col-xs-6 col-md-4 col-lg-3 col-xl-2"
              ></Badge>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <BadgePage
      badge_info={badge_selected}
      resetBadge={handleBadgeReset}
    ></BadgePage>
  );
}
