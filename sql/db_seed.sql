CREATE TABLE IF NOT EXISTS tblWishlistedItems (
  userID INT NOT NULL,
  itemID INT NOT NULL,
  UNIQUE(userID, itemID)
);