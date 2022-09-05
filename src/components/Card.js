import React, { useState } from 'react';
import styles from "./Card.module.css";
import { faCoffee, faTrophy, faGamepad, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({member}) => {

    const {  id,name, about, img, level,points,awards,matches,pals,coffee, groupName, date, birthPlace,position } = member;
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={styles.container} onMouseEnter={() => setIsShown(true)}
                                        onMouseLeave={() => setIsShown(false)}>
            
                        <div className={ id===2 ? styles.leftGreen : styles.leftRed}>
                            <div className={styles.level}>LEVEL {level}</div>
                            <img src={img} alt="user" className={ id===2 ? styles.imageGreen : styles.imageRed} />
                            <div className={styles.points}>{points} POINTS</div>
                        </div>
                                         
            {isShown ?(<div className={ id===2 ? styles.moreInfoGreen : styles.moreInfoRed} >
                         
                           <div className={ id===2 ? styles.nameGreen : styles.nameRed}><h1>{name}</h1></div>
                            <div className={ id===2 ? styles.coordsGreen : styles.coordsRed}>
                                <span>{groupName}</span>
                                <span className={styles.justify}>{date}</span>
                                <span>{position}</span>
                                <span className={styles.justify}>{birthPlace}</span>
                             </div>
                            <div className={ id===2 ? styles.statsGreen : styles.statsRed}>
                                <div className={styles.awards}>
                                    <div class="title">Awards</div>
                                    <FontAwesomeIcon icon={faTrophy} />
                                    <div class="value">{awards}</div>
                                </div>
                                <div className={styles.matches}>
                                    <div class="title">Matches</div>
                                    <FontAwesomeIcon icon={faGamepad} />
                                    <div class="value">{matches}</div>
                                </div>
                                <div className={styles.pals}>
                                    <div class="title">Pals</div>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div class="value">{pals}</div>
                                </div>
                                <div className={styles.coffee}>
                                    <div class="title">Coffee</div>
                                    <FontAwesomeIcon icon={faCoffee} />
                                    <div class="value infinity">{coffee}</div>
                                </div>
                            </div>
                        </div>) 
                     :(<div className={styles.right}>
                          <div className={styles.name1}><h1>{name}</h1></div>
                          <div className={styles.about}>{about}</div>
                          <div className={styles.more}>Mouse over the card for more info</div>
                      </div>)
            }
            
            
        </div>
    );
};

export default Card;