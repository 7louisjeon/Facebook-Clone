import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {Avatar, IconButton} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://lh3.googleusercontent.com/lGvpc6UTKDnMoIRqcu8N-oWE-hPcQkwsRFnfDuplGGyCIvVvG0hBAWswV5da4A0-EKis7ZTHgEpYtLkxr5-okLY36SQS36gmk0wdrB3G0-Ef6l0ReyTVgspQ8ETs1ssFehlWrQ-fTzuanYTn99zEF_zvr3T8YtC9kR747EpxCN4QzWbgoiNYkzVjQkJcg6WXd28BEBK_acm2ckzKTLhYSzkfmTMk3aCD1iNleuijOU2WiJyNOjJrqY_K2rW1zfjA1N1jWWtmbGfmnU4b1t-Bne8hoV7rqGC0ZBlaIVJIY2ZR9RIw5xbuBmXQ5nsvJMaDvLw6V8awzHTU7PS9KhPPE-Rs8Tw4FiUMxctCZD4UQiCArRrCJ58M0jM7FzcrfOxxJ5XN8PY-qjAsrHJlyAAlNmD30YPsQw8SVQ2ksg441s4NkHsMMVnxhD4eDiFG0sT_6NagVlgONxlq6qGpcEs-vSrpAU_ahAlFOFeZSELPFN4Kejc2tyiWXYwvSB53tWCHmLpEZ_K65xO-g2bSnwlIbSMoWeKSWcLRdTV_0eiC7O5kS2ix-yfLcnN9-DebBjsncYRd3-qnOkglIQW-G6KIv32rFucIIlLlb5W7dwZ-qou8kRoQpnzqOX3V0mlf6sWMa3nyLCWSK0BXVwe7XKqeTvY08kKmLZWrIxBKx6zxoDIvdG5SeDxJxYDdG6vf=s500-no?authuser=0'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input placeholder="Search Youtubook" type='text' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header
