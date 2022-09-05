import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
 

const Cards = () => {

    const members = [
        {
          "id": 1,
          "name": "Jane Doe",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
          "img": user1,
          "level":"13",
          "points":"5,312",
          "awards": "2",
          "matches": "27",
          "pals":"123",
          "coffee":"∞",
          "groupName":"Group Name",
          "date":"Joined January 2019",
          "birthPlace":"City, Country",
          "position":"Position/Role"
        },
        {
          "id": 2,
          "name": "Alexandra Smith",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
          "img": user2,
          "level":"13",
          "points":"5,312",
          "awards": "2",
          "matches": "27",
          "pals":"123",
          "coffee":"∞",
          "groupName":"Group Name",
          "date":"Joined January 2019",
          "birthPlace":"City, Country",
          "position":"Position/Role"
        }
    ] 

    return (
        
        <div className={styles.container} >
            <div className={styles.card}>
                  {members.map(member => <Card key={member.id} member={member}></Card>)}
            </div>
        </div>
    );
};

export default Cards;