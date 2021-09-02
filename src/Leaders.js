import { Leader } from './Leader';
import './Leaders.css';

const Leaders = () => {
    const atreides = [
        { name: 'Thufir Hawat', power: '5'},
        { name: 'Lady Jessica', power: '5'},
        { name: 'Gurney Halleck', power: '4'},
        { name: 'Duncan Idaho', power: '2'},
        { name: 'Dr. Wellington Yeuh', power: '1'}
    ]

    const fremen = [
        { name: 'Stilgar', power: '7'},
        { name: 'Chani', power: '6'},
        { name: 'Otheym', power: '5'},
        { name: 'Shadout Mapes', power: '3'},
        { name: 'Jamis', power: '2'}
    ]

    const spacingGuild = [
        { name: 'Staban Tuek', power: '5'},
        { name: 'Master Bewt', power: '5'},
        { name: 'Esmar Tuek', power: '3'},
        { name: 'Soo-Soo Sook', power: '2'},
        { name: 'Guild Rep.', power: '1'}
    ]

    const harkonnen = [
        { name: 'Feyd-Rautha', power: '6'},
        { name: 'Beast Rabban', power: '4'},
        { name: 'Piter de Vries', power: '3'},
        { name: 'Captain Iakin Nefud', power: '2'},
        { name: 'Umman Kudu', power: '1'}
    ]

    const emperor = [
        { name: 'Hasimir Fenring', power: '6'},
        { name: 'Captain Aramsham', power: '5'},
        { name: 'Caid', power: '3'},
        { name: 'Burseg', power: '3'},
        { name: 'Bashar', power: '2'}
    ]

    const beneGesserit = [
        { name: 'Alia', power: '5'},
        { name: 'Margot Lady Fenring', power: '5'},
        { name: 'Mother Ramallo', power: '5'},
        { name: 'Princess Irulan', power: '5'},
        { name: 'Wanna Yueh', power: '5'}
    ]

    const tleilaxu = [
        { name: 'Zoal', power: 'X'},
        { name: 'Hidar Fen Ajidica', power: '4'},
        { name: 'Master Zaaf', power: '3'},
        { name: 'Wykk', power: '2'},
        { name: 'Blin', power: '1'}
    ]

    const ixian = [
        { name: 'Ctair Pilru', power: '5'},
        { name: 'Tessia Vernius', power: '5'},
        { name: 'Dominic Vernius', power: '4'},
        { name: 'Kailea Vernius', power: '2'},
        { name: 'Cammar Pilru', power: '1'}
    ]

    const allFactions = [
        {name: 'House Atreides', leaders: atreides},
        {name: 'House Harkonnen', leaders: harkonnen},
        {name: 'Spacing Guild', leaders: spacingGuild},
        {name: 'Fremen', leaders: fremen},
        {name: 'Emperor', leaders: emperor},
        {name: 'Bene Gesserit', leaders: beneGesserit},
        {name: 'Tleilaxu', leaders: tleilaxu},
        {name: 'Ixian', leaders: ixian},
    ]

    return <div className="leaders-wrapper">
        {allFactions.map(({name, leaders}) => <Leader leaders={leaders} houseName={name} />)}
    </div>
}

export { Leaders };