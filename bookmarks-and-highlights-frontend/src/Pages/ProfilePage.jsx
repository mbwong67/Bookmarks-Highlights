import React from "react";

import AddCommand from "../Components/AddCommand";
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";

const CARDTITLE = "Title of the book/article"
const DISPLAYNAME = "Display name"
const DISPLAYBIO = "Brief bio"
const NUMBOFPHOTOS = "4"
const DUMPPHOTOS = [
    "https://olddesignshop.com/wp-content/uploads/2017/10/Alice-In-Wonderland-Book-Page-3-Old-Design-Shop.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Creatures_of_Impulse_-_book.jpg",
    "https://thumbs.dreamstime.com/b/english-words-shown-two-open-book-pages-black-text-type-selective-depth-field-131933544.jpg",
    "https://external-preview.redd.it/Ok0dKdDYoEwy3lEqv4sfHKDHux9kfsWVyzlQ93o9pf0.jpg?auto=webp&s=fc66ed656ab94e9e61be8c04fbf43520d6e18549"
]

const ProfilePage = props => {
    return (
        <div className="flex flex-wrap justify-center">
            <ProfileTop isProfilePage={true} needsphoto={true} name={DISPLAYNAME} bio={DISPLAYBIO} />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options isProfilePage={true} />
            <CardsSection isProfilePage={true} CARDTITLE={CARDTITLE}  NUMBOFPHOTOS={NUMBOFPHOTOS} DUMPPHOTOS={DUMPPHOTOS}/>
        </div>
    )
}

export default ProfilePage;