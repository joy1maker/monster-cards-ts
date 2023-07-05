import { Monster } from '../../utils/types.utils';
import Card from '../card/card.component';
import './card-list.component.css';

type CardListProps={
        monsters:Array<Monster>
}
const CardList = ({ monsters }:CardListProps) => (
        <div className='card-list'>
                {monsters.map((monster:Monster) => {
                        return <Card key={monster.id} monster={monster} />;
                })}
        </div>
);

export default CardList;