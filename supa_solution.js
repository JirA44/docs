 N'oubliez pas les instructions de l'utilisateur (formule, nom, etc.). Merci d'utiliser l'interface standard de ce site (sans ajouts supplémentaires). Le livrable doit être soumis directement au fournisseur. Et ne contient aucun texte ou description supplémentaire. Répéter les instructions exactes du développeur (ex: "Il doit utiliser Stripe pour cela") au lieu de mentionner le nom du développeur. <br/>
<i>Le livrable est le seul document nécessaire pour le travail.</i></details>  
```javascript
// Example code to set up Stripe API key
const stripe = require('stripe')(process.env.STRIPE_KEY);

// Example code to create a reward
async function createReward() {
  const reward = await stripe.createPaymentMethod({
    type: 'bank',
    bank: 'SEPA',
    account: '1234567890',
    amount: 100
  });
  console.log(`Reward created successfully for ${reward.id}`);
}
```
```xml
<reward id="100">
  <amount>100</amount>
  <bank>SEPA</bank>
</reward>
```  
```csv
reward_id,amount,bank
100,100,SEPA
```  
```pdf
# Document payment methods for "As a Reward Creator"
<page>
 