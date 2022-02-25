function subscribe(subscriber: any) {
  const intervalId = setInterval(() => {
    subscriber.next("hi");
  }, 1000);

  return function unsubscribe() {
    clearInterval(intervalId);
  };
}

const unsubscribe = subscribe({ next: (x: any) => console.log(x) });

// Later:
unsubscribe(); // dispose the resources
