export const POLICIES: any = {
    1: {
        id: 1, num: 'PO1', amount: 1000, userId: 1, clientId: 1, description: 'Insurance policy number PO1'
    },
    2: {
        id: 2, num: 'PO2', amount: 2000, userId: 1, clientId: 2, description: 'Insurance policy number PO2'
    },
    3: {
        id: 3, num: 'PO3', amount: 3000, userId: 1, clientId: 3, description: 'Insurance policy number PO3'

    },
    4: {
        id: 4, num: 'PO4', amount: 4000, userId: 1, clientId: 4, description: 'Insurance policy number PO4'
    }
}

export function findPolicies(num:string){
    return Object.values(POLICIES).filter((policy) => (policy as any).num == num );
}