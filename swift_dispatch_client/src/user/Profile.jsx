import React from 'react';

const Profile = ({currentUser}) => {
    return (
        <div className="profile-container py-8">
            <div className="container mx-auto">
                <div className="profile-info text-center">
                    <div className="profile-avatar">
                        <div className="text-avatar">
                <span className="line-height-200px text-white text-3xl">
                  {currentUser.name && currentUser.name[0]}
                </span>
                        </div>
                    </div>
                    <div className="profile-name">
                        <h2 className="font-medium text-lg">{currentUser.name}</h2>
                        <p className="profile-email font-normal">{currentUser.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
