module.exports = {
  token: 'Your Token', // Your token if you want to use .env then comment it and comment out dow option
  // token: process.env.token,
  prefix: 'e+', // Bot prefix
  adReward: 100, // How much coins does users get when they successfully do adreward?
  adCooldown: 1, // How many minutes users have to wait to do another ad reward?
  serverAD: 10, // How much coins need to Advertise users server per 10 members
  serverMax: 100, // Maximum users can get members from server advertisements.
  serverADCooldown: 120, // Cooldown for Server Advertisement in minutes
  joinReward: 50, // How much coins does users get when they join servers.
  dollarPerH: 0.0001, // How much dollar costs 100 Coins. it will show to your users when they cashout.
  maxAccept: 100, // Maximum number of storing user's payment. Low = Fast Payment, Less Headache, But user get limits
  port: 3000, // Open your Port it is Extremely Required
  minimumCashOut: 1000, // Minimum cash users can withdraw
  maximumCashOut: 10000, // Maximum coins user can request cashout
  access: ['707058653727031298'],
  // Payment methods
  paypal: true, 
  bitcoin: true,
  ethereum: false,
  litecoin: false,
  monero: false,
  stripe: false,
  payoneer: true,
  skrill: false,
  bank: true,

  // API
  randomApi: true, // if you have been set more than one api you should enable this. it will use one of your api randomly
  shrinkearn: '8e6e1a2793b81906fdded75653755f48fa8c38f7',
  // shrinkearn: process.env.shrinkearn,
  //more coming soon
}
