const { Router } = require("express");
const router = Router();
const { tweetsController } = require("../controllers/tweets.controller");

router.get("/tweets", tweetsController.getTweets);
router.get("/tweets/:id", tweetsController.getTweetsId);
router.post("/tweets", tweetsController.postTweets);
router.delete("/tweets/:id", tweetsController.deleteTweets);
router.patch('/tweets/user/like/:id',tweetsController.like)
 
module.exports = router;
