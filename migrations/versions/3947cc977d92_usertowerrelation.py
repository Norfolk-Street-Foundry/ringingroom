"""UserTowerRelations

Revision ID: 3947cc977d92
Revises: ed38068f78f3
Create Date: 2020-05-02 20:20:49.849009

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3947cc977d92'
down_revision = 'ed38068f78f3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_tower_relation',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('tower_id', sa.Integer(), nullable=False),
    sa.Column('relationship', sa.String(length=32), nullable=True),
    sa.ForeignKeyConstraint(['tower_id'], ['towerDB.tower_id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'tower_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_tower_relation')
    # ### end Alembic commands ###