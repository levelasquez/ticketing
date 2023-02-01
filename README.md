# ticketing

## Execute this commands every time the cluster is recreated with corresponding values

```sh
k create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

```sh
k create secret generic stripe-secret --from-literal=STRIPE_KEY=key
```
