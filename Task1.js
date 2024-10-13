const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function giveParcel() {
    const personReceivingParcel = peopleWaiting.shift()
    alert(`${personReceivingParcel} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}

function leaveQueueWithoutParcel() {
    const personLeaving = peopleWaiting.pop()
    alert(`${personLeaving} не получил(а) посылку и ушел(ла) из очереди.`)
}

giveParcel()
giveParcel()
giveParcel()

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel()
}
